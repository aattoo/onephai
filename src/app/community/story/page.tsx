"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Story",
    subtitle: "Physical AI 생태계를 만들어가는 사람들의 이야기",
    stories: [
      { title: "KAIST 로봇공학 연구실의 도전", author: "김민수 교수", excerpt: "구동기 계층의 비선형 오차 보정 연구가 산업 현장에 적용되기까지의 여정을 공유합니다.", date: "2026.03.20" },
      { title: "스타트업이 Physical AI를 만나다", author: "엔젬로보틱스", excerpt: "로봇 스타트업이 ONE PhAI 플랫폼을 통해 기술 검증과 투자를 받기까지의 경험담입니다.", date: "2026.03.12" },
      { title: "현장 전문가의 암묵지를 데이터로", author: "유로보틱스 기술팀", excerpt: "Shared Autonomy 방식으로 산업 현장의 노하우를 학습 데이터로 변환한 사례를 소개합니다.", date: "2026.03.01" },
    ],
  },
  en: {
    title: "Story",
    subtitle: "Stories from people building the Physical AI ecosystem",
    stories: [
      { title: "The Challenge of KAIST Robotics Lab", author: "Prof. Kim Minsu", excerpt: "Sharing the journey of applying nonlinear error correction research in actuator layers to industrial settings.", date: "2026.03.20" },
      { title: "When Startups Meet Physical AI", author: "NZEM Robotics", excerpt: "A startup's experience with technology validation and investment through the ONE PhAI platform.", date: "2026.03.12" },
      { title: "Turning Expert Tacit Knowledge into Data", author: "Eurobotics Tech Team", excerpt: "A case study on converting industrial know-how into training data using Shared Autonomy.", date: "2026.03.01" },
    ],
  },
};

export default function StoryPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>
      <div className="space-y-6">
        {t.stories.map((s) => (
          <article key={s.title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-400">{s.date}</span>
              <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">{s.author}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
