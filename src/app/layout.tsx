import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Nellgram",
  description: "Where Every Meal Is a Journey Back Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     
    <link rel="icon" href="/favicon.ico" />

      </head>
      <body className={inter.className}>
      <NextTopLoader />
        <main className="flex flex-col items-center justify-between relative">
          404
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
