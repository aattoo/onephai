"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

export default function ApplyCompletePage() {
  const { lang } = useLang();

  const t = {
    ko: {
      title: "신청이 완료되었습니다!",
      message:
        "K-ROBOTICS STARTUP CUP 2026 참가 신청이 정상적으로 접수되었습니다. 입력하신 이메일로 확인 메일이 발송됩니다.",
      note: "심사 결과는 접수 마감 후 2주 이내에 이메일로 개별 안내드립니다.",
      backToChallenge: "대회 페이지로 돌아가기",
      backToHome: "홈으로",
    },
    en: {
      title: "Application Submitted!",
      message:
        "Your application for K-ROBOTICS STARTUP CUP 2026 has been successfully submitted. A confirmation email will be sent to the provided address.",
      note: "Review results will be notified individually via email within 2 weeks after the application deadline.",
      backToChallenge: "Back to Challenge",
      backToHome: "Home",
    },
  };

  const c = t[lang];

  return (
    <div className="max-w-lg mx-auto px-8 py-24 text-center">
      <div className="text-5xl mb-6">&#10004;</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{c.title}</h1>
      <p className="text-gray-600 leading-relaxed mb-4">{c.message}</p>
      <p className="text-sm text-gray-500 mb-10">{c.note}</p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/community/challenge"
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {c.backToChallenge}
        </Link>
        <Link
          href="/"
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          {c.backToHome}
        </Link>
      </div>
    </div>
  );
}
