import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { firstName, lastName, email, emailVerification } = await req.json();

    try {
        const user = await prismadb.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                emailVerification: emailVerification,
            },
        });
        NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        NextResponse.json({ error: "Internal Server Error" });
    }
}
