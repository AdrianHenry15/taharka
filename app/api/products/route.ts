import prismadb from "../../../prisma/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
    const products = await prismadb.product.findMany();
    return NextResponse.json(products);
}
