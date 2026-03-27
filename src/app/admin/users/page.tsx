"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function UsersPage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "사용자 승인" : "User Approval";
  const subtitle = lang === "ko" ? "가입 승인 대기 중인 사용자를 관리합니다" : "Manage users awaiting registration approval";

  const users = [
    { name: "이정훈", email: "jhlee@kaist.ac.kr", org: "KAIST ME", date: "2026.03.26", status: lang === "ko" ? "대기" : "Pending" },
    { name: "박서연", email: "sypark@nzem.kr", org: lang === "ko" ? "엔젬로보틱스" : "NZEM Robotics", date: "2026.03.25", status: lang === "ko" ? "대기" : "Pending" },
    { name: "김태호", email: "thkim@euro.co.kr", org: lang === "ko" ? "유로보틱스" : "Eurobotics", date: "2026.03.24", status: lang === "ko" ? "승인" : "Approved" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="space-y-4">
        {users.map((u) => (
          <div key={u.email} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">{u.name[0]}</div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{u.name}</p>
              <p className="text-xs text-gray-400">{u.email} &middot; {u.org}</p>
            </div>
            <span className="text-xs text-gray-400">{u.date}</span>
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${u.status.includes("대기") || u.status === "Pending" ? "bg-yellow-50 text-yellow-600" : "bg-green-50 text-green-600"}`}>{u.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
