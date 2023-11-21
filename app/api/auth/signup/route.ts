import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { firstName, lastName, email, phone, emailVerification, phoneVerification } = await req.json();

    try {
        const user = await prismadb.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                emailVerification: emailVerification,
                phoneVerification: phoneVerification,
            },
        });
        NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        NextResponse.json({ error: "Internal Server Error" });
    }
}
