import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Emily's Beautiy Lounge",
    description:
        "Book an appoinmnet for Emily's Beautiy Lounge or browes our product catalog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navItems = [
        { href: "/", class: "hover:text-gray-500", name: "Home" },
        { href: "/about", class: "hover:text-gray-500", name: "About" },
        { href: "/services", class: "hover:text-gray-500", name: "Services" },
        { href: "/gallery", class: "hover:text-gray-500", name: "Gallery" },
        { href: "/products", class: "hover:text-gray-500", name: "Products" },
        {
            href: "/booking",
            class: "bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full",
            name: "Booking",
        },
    ];

    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
            >
                <NavBar navItems={navItems} />
                <div style={{ flex: "1" }}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
