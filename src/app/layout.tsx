"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const disableNavbar = ["/login", "/register"]

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname= usePathname();
  return (
    <html lang="en">
      <body
        className={poppins.className}>
        <SessionProvider> 
          {!disableNavbar.includes(pathname)&& <Navbar/>}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
