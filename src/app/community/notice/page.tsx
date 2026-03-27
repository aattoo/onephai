"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Notice & FAQ",
    subtitle: "공지사항과 자주 묻는 질문",
    notices: [
      { title: "K-ROBOTICS STARTUP CUP 2026 참가자 모집 안내", date: "2026.03.15", badge: "공지" },
      { title: "ONE PhAI 플랫폼 베타 서비스 오픈", date: "2026.03.01", badge: "공지" },
      { title: "2026년 상반기 Academy 프로그램 일정 안내", date: "2026.02.20", badge: "공지" },
    ],
    faqTitle: "FAQ",
    faqs: [
      { q: "ONE PhAI 플랫폼은 누구나 이용할 수 있나요?", a: "현재 베타 기간 중에는 KAIST 연구자 및 파트너 기업 소속 구성원을 대상으로 서비스를 제공하고 있습니다." },
      { q: "KITS 모듈은 어떻게 이용할 수 있나요?", a: "Academy 프로그램을 수료하거나, 파트너 기관을 통해 접근 권한을 받을 수 있습니다." },
      { q: "Startup Cup에 해외 팀도 참가할 수 있나요?", a: "네, 해외 팀의 참가도 환영합니다. 영문 서류 제출이 가능합니다." },
    ],
  },
  en: {
    title: "Notice & FAQ",
    subtitle: "Announcements and frequently asked questions",
    notices: [
      { title: "K-ROBOTICS STARTUP CUP 2026 Call for Participants", date: "2026.03.15", badge: "Notice" },
      { title: "ONE PhAI Platform Beta Service Launch", date: "2026.03.01", badge: "Notice" },
      { title: "2026 H1 Academy Program Schedule", date: "2026.02.20", badge: "Notice" },
    ],
    faqTitle: "FAQ",
    faqs: [
      { q: "Is the ONE PhAI platform open to everyone?", a: "During the beta period, the service is available to KAIST researchers and partner organization members." },
      { q: "How can I access KITS modules?", a: "You can gain access by completing an Academy program or through partner institutions." },
      { q: "Can international teams participate in the Startup Cup?", a: "Yes, international teams are welcome. English document submissions are accepted." },
    ],
  },
};

export default function NoticePage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>

      {/* Notices */}
      <div className="space-y-3 mb-16">
        {t.notices.map((n) => (
          <div key={n.title} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
            <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded font-medium shrink-0">{n.badge}</span>
            <span className="text-gray-900 text-sm font-medium flex-1">{n.title}</span>
            <span className="text-xs text-gray-400 shrink-0">{n.date}</span>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.faqTitle}</h2>
      <div className="space-y-4">
        {t.faqs.map((faq) => (
          <div key={faq.q} className="p-5 bg-white rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Q. {faq.q}</h3>
            <p className="text-gray-600 text-sm">A. {faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
