"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import AppProvider from "./_Context/AppContext"; 
import { useState } from "react";

const Inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppProvider> 
        <html lang="en">
          <body className={Inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </AppProvider>
    </ClerkProvider>
  );
}
