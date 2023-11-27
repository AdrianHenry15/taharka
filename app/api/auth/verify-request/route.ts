import { NextResponse } from "next/server";
import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";
import prismadb from "@/prisma/prismadb";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { firstName, lastname, email } = await req.json();
    try {
        const data = await resend.emails.send({
            from: "adrianhenry2115@gmail.com",
            to: email,
            subject: "Hello world",
            react: EmailTemplate({ firstName: firstName, lastName: lastname, email: email }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
