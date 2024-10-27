import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Provider from "@/app/provider";
import React from "react";

export const metadata: Metadata = {
  title: "BLOG-KH",
  description: "Share blog",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Provider>
                <Header/>
                {children}
          </Provider>
      </body>
    </html>
  );
}
