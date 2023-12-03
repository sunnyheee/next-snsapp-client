import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { AuthProvider } from "../context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next SNS APP",
  description: "Next SNS APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}{" "}
        </AuthProvider>
      </body>
    </html>
  );
}
