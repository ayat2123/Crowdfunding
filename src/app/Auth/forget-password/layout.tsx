// import LoginNavbar from "@/app/Auth/login/component/shared/LoginNavbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LoginNavbar from "../login/component/shared/LoginNavbar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Forget Password",
  description: "Forget Password page for Fund for Found",
};

export default function ForgetPasswordLayout({
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