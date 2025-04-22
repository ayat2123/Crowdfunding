import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LoginNavbar from "./component/shared/LoginNavbar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Fund for Found account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <LoginNavbar />
      {children}
    </div>
  );
} 