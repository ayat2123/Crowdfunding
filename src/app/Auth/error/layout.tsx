import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ErrorNavbar from "./component/shared/ErrorNavbar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Error",
  description: "Error page for Fund for Found",
};

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <ErrorNavbar />
      {children}
    </div>
  );
} 