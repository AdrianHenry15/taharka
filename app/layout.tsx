import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

// import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from "@/providers/toast-provider";
// import { ThemeProvider } from '@/providers/theme-provider'

import "./global.css";
import { debugGlobalStateStore } from "@/store/DevGlobalStateStore";
import { globalStore } from "@/store/GlobalStateStore";
import { Metadata } from "next";
import StateProvider from "@/providers/state-provider";

const stateStore = process.env.NODE_ENV === "development" ? debugGlobalStateStore : globalStore;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Taharka",
    description: "Ice Cream Shop",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <StateProvider>
                <html lang="en">
                    <link rel="icon" href="/public/taharka_logo.png" />
                    <body className={inter.className}>
                        {/* <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          > */}
                        <ToastProvider />
                        {/* <ModalProvider /> */}
                        {children}
                        {/* </ThemeProvider> */}
                    </body>
                </html>
            </StateProvider>
        </ClerkProvider>
    );
}
