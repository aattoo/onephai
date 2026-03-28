import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ONE PhAI — Physical AI Platform",
  description:
    "A Collaborative Platform for Physical AI. Deep Tech Scale-up Valley × KAIST × ONE PhAI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex bg-gray-50 font-sans">
        <LanguageProvider>
          <AuthProvider>
            <Sidebar />
            <div className="flex-1 ml-0 lg:ml-60 flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
