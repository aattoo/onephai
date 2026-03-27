"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function ContentManagePage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "콘텐츠 관리" : "Content Management";
  const subtitle = lang === "ko" ? "사이트 콘텐츠를 관리합니다" : "Manage site content";

  const items = [
    { id: 1, title: "K-ROBOTICS STARTUP CUP 2026", type: lang === "ko" ? "공지" : "Notice", status: lang === "ko" ? "게시중" : "Published", date: "2026.03.15" },
    { id: 2, title: "PhAI Academy Foundation Course", type: lang === "ko" ? "프로그램" : "Program", status: lang === "ko" ? "게시중" : "Published", date: "2026.03.01" },
    { id: 3, title: "Sim-to-Real Transfer 인사이트", type: lang === "ko" ? "인사이트" : "Insight", status: lang === "ko" ? "초안" : "Draft", date: "2026.03.25" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-gray-500">ID</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "제목" : "Title"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "유형" : "Type"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "상태" : "Status"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "날짜" : "Date"}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-400">{item.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded">{item.type}</span></td>
                <td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded ${item.status.includes("게시") || item.status === "Published" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>{item.status}</span></td>
                <td className="px-6 py-4 text-gray-400">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
