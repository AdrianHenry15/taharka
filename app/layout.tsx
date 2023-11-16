import { Nunito_Sans } from "next/font/google";
import { Metadata } from "next";

import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Taharka Bros.",
    description: "Ice Cream Shop",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <link rel="icon" href="/taharka_logo.png" />
                <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
