import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import { Header, SubscribeOrc, Footer } from "./components/ui";

const PressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retropixel Portfolio",
  description: "A 8-bit Retro Pixel Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PressStart2P.className}>
        <Header />
        {children}
        <SubscribeOrc />
        <Footer />
      </body>
    </html>
  );
}
