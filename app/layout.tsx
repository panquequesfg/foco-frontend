"use client"

import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/components/layout/navbar";
import {Heart} from "lucide-react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image";
import Link from "next/link";

const queryClient = new QueryClient()

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
          <header>
            <div className="flex w-full justify-between items-end px-8 py-7 sm:px-20">
              <div className="w-32 h-10">
                <Link href="/" legacyBehavior passHref>
                  <Image src="/logo.svg" alt="logo" sizes="100vw" width={128} height={128} style={{position: 'relative'}} />
                </Link>
              </div>
              <Navbar/>
            </div>
          </header>
          {children}
          <footer className="gap-x-2 flex flex-wrap items-end justify-center text-xs text-gray-500 py-10">
            Made with <Heart className="w-3 h-3"/> by PFG
          </footer>
        </div>
        <Toaster />
      </body>
      </html>
    </QueryClientProvider>
  );
}
