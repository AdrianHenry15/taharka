// import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
// import { ToastProvider } from "@/providers/toast-provider";
import { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";
import StateProvider from "@/providers/state-provider";
import { ModalProvider } from "@/providers/modal-provider";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Taharka Bros.",
    description: "Ice Cream Shop",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // <ClerkProvider>
        <html lang="en">
            <link rel="icon" href="/taharka_logo.png" />
            <body className={inter.className}>
                {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
                <StateProvider>
                    {/* <ToastProvider /> */}
                    <ModalProvider />
                    {children}
                </StateProvider>
                {/* </ThemeProvider> */}
            </body>
        </html>
        // </ClerkProvider>
    );
}
