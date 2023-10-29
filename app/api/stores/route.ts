import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        // Admin user wanting to create a store
        const { userId } = auth();
        const body = await req.json();

        // To create a store all you need is the name of that store
        const { name } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId,
            },
        });

        return NextResponse.json(store);
    } catch (error) {
        console.log("[STORES_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
