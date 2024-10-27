import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions : NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || "",
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}