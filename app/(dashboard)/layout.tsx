import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";
import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({ children, params }: { children: React.ReactNode; params: { storeId: string } }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
