import { Inter } from "next/font/google";
import "./globals.css";

import { baseURL } from "@/app/resources";
import { person } from "@/app/resources";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://{baseURL}`),
    title: "Create Next App",

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
