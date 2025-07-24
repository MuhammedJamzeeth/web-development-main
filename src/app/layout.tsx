import type {Metadata} from "next";
import { Analytics } from "@vercel/analytics/next"
import {Archivo, Open_Sans} from 'next/font/google';
import "./globals.css";
import Footer from "@/sections/Footer";

const archivo = Archivo({
    display: "swap",
    weight: "variable",
    subsets: ["latin"],
    variable: '--font-archivo',
});

const open_sans = Open_Sans({
    display: "swap",
    weight: "variable",
    subsets: ["latin"],
    variable: '--font-open-sans',
});

export const metadata: Metadata = {
    title: "Anself Dynamics Webpage",
    description: "AI Medtech Startup",
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased text-stone-900 ${archivo.variable} ${open_sans.variable} font-sans`}>{children}
        <Analytics />
        <Footer />
        </body>
        </html>
    );
}
