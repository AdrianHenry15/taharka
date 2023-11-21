import prismadb from "@/prisma/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { firstName, lastName, email, phone, emailVerification, phoneVerification } = req.body;

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
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
