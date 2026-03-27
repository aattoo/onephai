"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function LogsPage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "활동 로그" : "Activity Logs";
  const subtitle = lang === "ko" ? "시스템 활동 기록을 확인합니다" : "View system activity records";

  const logs = [
    { time: "15:32:10", user: "admin@onephai.com", action: lang === "ko" ? "콘텐츠 수정" : "Content edited", target: "K-ROBOTICS STARTUP CUP 2026" },
    { time: "14:18:45", user: "jhlee@kaist.ac.kr", action: lang === "ko" ? "회원가입 요청" : "Registration request", target: "-" },
    { time: "11:05:22", user: "admin@onephai.com", action: lang === "ko" ? "사용자 승인" : "User approved", target: "thkim@euro.co.kr" },
    { time: "09:30:00", user: "system", action: lang === "ko" ? "백업 완료" : "Backup completed", target: "db-2026-03-27" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8">{subtitle}</p>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "시간" : "Time"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "사용자" : "User"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "활동" : "Action"}</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{lang === "ko" ? "대상" : "Target"}</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="px-6 py-4 text-gray-400 font-mono text-xs">{log.time}</td>
                <td className="px-6 py-4 text-gray-600">{log.user}</td>
                <td className="px-6 py-4 text-gray-900">{log.action}</td>
                <td className="px-6 py-4 text-gray-400">{log.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
