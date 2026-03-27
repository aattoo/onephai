"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function CategoriesPage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "Story 카테고리" : "Story Categories";
  const subtitle = lang === "ko" ? "Story 게시판의 카테고리를 관리합니다" : "Manage Story board categories";

  const categories = [
    { name: lang === "ko" ? "연구 사례" : "Research Cases", count: 12, color: "bg-blue-500" },
    { name: lang === "ko" ? "스타트업" : "Startups", count: 8, color: "bg-green-500" },
    { name: lang === "ko" ? "산업 적용" : "Industry Applications", count: 5, color: "bg-purple-500" },
    { name: lang === "ko" ? "인터뷰" : "Interviews", count: 3, color: "bg-orange-500" },
    { name: lang === "ko" ? "기술 해설" : "Technical Guides", count: 7, color: "bg-pink-500" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="space-y-3">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
            <div className={`w-3 h-3 rounded-full ${cat.color}`} />
            <span className="font-medium text-gray-900 flex-1">{cat.name}</span>
            <span className="text-sm text-gray-400">{cat.count} {lang === "ko" ? "개 글" : "posts"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
