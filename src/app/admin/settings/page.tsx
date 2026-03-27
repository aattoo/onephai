"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function SettingsPage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "사이트 설정" : "Site Settings";
  const subtitle = lang === "ko" ? "사이트 기본 설정을 관리합니다" : "Manage site basic settings";

  const settings = [
    { label: lang === "ko" ? "사이트 이름" : "Site Name", value: "ONE PhAI" },
    { label: lang === "ko" ? "기본 언어" : "Default Language", value: "한국어 (KO)" },
    { label: lang === "ko" ? "이메일" : "Contact Email", value: "contact@onephai.com" },
    { label: lang === "ko" ? "GA 추적 코드" : "GA Tracking Code", value: "G-G3BK3ZBGM8" },
    { label: lang === "ko" ? "베타 모드" : "Beta Mode", value: lang === "ko" ? "활성" : "Active" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        {settings.map((s) => (
          <div key={s.label} className="flex items-center justify-between px-6 py-4">
            <span className="text-sm font-medium text-gray-700">{s.label}</span>
            <span className="text-sm text-gray-500">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
