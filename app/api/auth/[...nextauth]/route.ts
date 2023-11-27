import NextAuth, { Session, User } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import prismadb from "@/prisma/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { JWT } from "next-auth/jwt";

const authOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        maxage: 60 * 60 * 24 * 30,
        encryption: true,
    },
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-in",
        error: "/sign-in",
    },
    callbacks: {
        async session({ session, token, user }: { session: Session; token: JWT; user: User }) {
            if (user !== null) {
                session.user = user;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
