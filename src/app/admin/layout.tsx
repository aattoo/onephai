"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLang } from "@/contexts/LanguageContext";
import Link from "next/link";

const ADMIN_EMAILS = ["admin@onephai.com", "aattoo@gmail.com"];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const { lang } = useLang();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-8 py-24 text-center">
        <div className="text-5xl mb-6">&#128274;</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {lang === "ko" ? "로그인이 필요합니다" : "Login Required"}
        </h1>
        <p className="text-gray-500 mb-6">
          {lang === "ko"
            ? "관리자 페이지에 접근하려면 로그인해주세요."
            : "Please log in to access admin pages."}
        </p>
        <Link
          href="/auth/login"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {lang === "ko" ? "로그인" : "Login"}
        </Link>
      </div>
    );
  }

  if (!ADMIN_EMAILS.includes(user.email ?? "")) {
    return (
      <div className="max-w-md mx-auto px-8 py-24 text-center">
        <div className="text-5xl mb-6">&#9888;</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {lang === "ko" ? "접근 권한이 없습니다" : "Access Denied"}
        </h1>
        <p className="text-gray-500 mb-6">
          {lang === "ko"
            ? "관리자 권한이 있는 계정으로 로그인해주세요."
            : "Please log in with an admin account."}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {lang === "ko" ? "홈으로" : "Go Home"}
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
