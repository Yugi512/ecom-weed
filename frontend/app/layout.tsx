import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { Toaster } from "@/components/ui/sonner"
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Blueberry's Weed Store",
  description: "Mock cannabis store, its just a template and the payment and authorization will be added soon, the app will use stripe for payment processing. It will be configured for retail sales but incase this is used for a actual cannabis store then there must be a license to sell cannabis to collect taxes on it so like I would need it to change and get approval from stripe to host this kind of website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body
                  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {children}
                    <Toaster />
                </body>
            </SessionProvider>
        </html>
    );
}
