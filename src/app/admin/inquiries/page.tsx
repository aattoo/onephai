"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function InquiriesPage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "문의 관리" : "Inquiry Management";
  const subtitle = lang === "ko" ? "Contact 폼을 통해 접수된 문의를 관리합니다" : "Manage inquiries received through the Contact form";

  const inquiries = [
    { id: 1, name: "김철수", email: "cs@example.com", subject: lang === "ko" ? "KITS 모듈 이용 문의" : "KITS Module Access", date: "2026.03.27", status: lang === "ko" ? "미답변" : "Unanswered" },
    { id: 2, name: "Jane Smith", email: "jane@startup.io", subject: "Startup Cup Application", date: "2026.03.26", status: lang === "ko" ? "답변완료" : "Answered" },
    { id: 3, name: "박민지", email: "mj@lab.kr", subject: lang === "ko" ? "Academy 프로그램 일정" : "Academy Schedule", date: "2026.03.25", status: lang === "ko" ? "미답변" : "Unanswered" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="space-y-4">
        {inquiries.map((inq) => (
          <div key={inq.id} className="p-5 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-900">{inq.name}</span>
                <span className="text-xs text-gray-400">{inq.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{inq.date}</span>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${inq.status.includes("미") || inq.status === "Unanswered" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>{inq.status}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{inq.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
