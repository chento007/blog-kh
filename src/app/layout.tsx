import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "BLOG-KH",
  description: "Share blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <Header/>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
