"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { lang, toggle } = useLang();
  const { user, loading, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-end gap-3 px-6 py-3 bg-white/80 backdrop-blur border-b border-gray-100">
      <button
        onClick={toggle}
        className="px-3 py-1.5 text-sm rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
      >
        {lang === "ko" ? "EN" : "KO"}
      </button>
      {loading ? null : user ? (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 truncate max-w-[160px]">{user.email}</span>
          <button
            onClick={() => signOut()}
            className="px-4 py-1.5 text-sm rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {lang === "ko" ? "로그아웃" : "Logout"}
          </button>
        </div>
      ) : (
        <Link
          href="/auth/login"
          className="px-4 py-1.5 text-sm rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          {lang === "ko" ? "로그인" : "Login"}
        </Link>
      )}
    </header>
  );
}
