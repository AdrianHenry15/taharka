import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignIn from "@/components/ui/modals/SignIn";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    if (!session || !session.user) {
        redirect("/api/auth/signin");
    } else if (session) {
        return <section className="flex flex-col w-full h-full">{children}</section>;
    }
}
