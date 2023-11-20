import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    if (!session || !session.user) {
        redirect("/signin");
    } else if (session) {
        return <section className="flex flex-col w-full h-full">{children}</section>;
    }
}
