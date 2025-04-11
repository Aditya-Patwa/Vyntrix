import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "VYNTRIX - Build. Connect. Deploy — On Solana, Seamlessly.",
  description: "Create smart contracts visually, manage users and data in real-time, and launch full-stack dApps on Solana — all without leaving your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
