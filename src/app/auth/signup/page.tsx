"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

export default function SignUpPage() {
  const { lang } = useLang();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = {
    ko: {
      title: "회원가입",
      email: "이메일",
      password: "비밀번호 (6자 이상)",
      confirm: "비밀번호 확인",
      submit: "가입하기",
      hasAccount: "이미 계정이 있으신가요?",
      signIn: "로그인",
      mismatch: "비밀번호가 일치하지 않습니다.",
      successMsg: "가입이 완료되었습니다! 이메일을 확인해주세요.",
    },
    en: {
      title: "Sign Up",
      email: "Email",
      password: "Password (min 6 chars)",
      confirm: "Confirm Password",
      submit: "Create Account",
      hasAccount: "Already have an account?",
      signIn: "Sign In",
      mismatch: "Passwords do not match.",
      successMsg: "Account created! Please check your email to confirm.",
    },
  };
  const c = t[lang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError(c.mismatch);
      return;
    }
    setLoading(true);
    const err = await signUp(email, password);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      setSuccess(true);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900";

  if (success) {
    return (
      <div className="max-w-sm mx-auto px-6 py-24 text-center">
        <div className="text-5xl mb-6">&#9993;</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{c.successMsg}</h1>
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          {c.signIn}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{c.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.email}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.password}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            minLength={6}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{c.confirm}</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className={inputClass}
            minLength={6}
            required
          />
        </div>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {loading ? "..." : c.submit}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-500">
        {c.hasAccount}{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          {c.signIn}
        </Link>
      </p>
    </div>
  );
}
