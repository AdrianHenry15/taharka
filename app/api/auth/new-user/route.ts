import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { firstName, lastName, email } = await req.json();

    try {
        const user = await prismadb.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
            },
        });
        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" });
    }
}
