import { Nunito_Sans } from "next/font/google";
import { Metadata } from "next";

import "./global.css";

const inter = Nunito_Sans({ subsets: ["latin"] });
const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:4000";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: SITE_NAME!,
        template: `%s | ${SITE_NAME}`,
    },
    robots: {
        follow: true,
        index: true,
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <link rel="icon" href="/taharka_logo.png" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
