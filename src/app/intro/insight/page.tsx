"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Insight",
    subtitle: "Physical AI 분야의 최신 연구와 기술 동향",
    articles: [
      { title: "Sim-to-Real Transfer의 현재와 미래", summary: "시뮬레이션에서 훈련된 정책이 실제 로봇에서 작동하기까지의 여정과 남은 과제를 살펴봅니다.", date: "2026.03.15" },
      { title: "분산지능 아키텍처가 로봇 제어를 바꾸는 방법", summary: "중앙 집중식 제어에서 계층별 분산 지능으로의 패러다임 전환을 분석합니다.", date: "2026.03.08" },
      { title: "구동기 기술의 최전선: SEA와 그 너머", summary: "Series Elastic Actuator의 발전과 차세대 구동기 기술 동향을 정리합니다.", date: "2026.02.28" },
    ],
  },
  en: {
    title: "Insight",
    subtitle: "Latest research and technology trends in Physical AI",
    articles: [
      { title: "The Present and Future of Sim-to-Real Transfer", summary: "Exploring the journey and remaining challenges of getting simulation-trained policies to work on real robots.", date: "2026.03.15" },
      { title: "How Distributed Intelligence Changes Robot Control", summary: "Analyzing the paradigm shift from centralized control to layer-wise distributed intelligence.", date: "2026.03.08" },
      { title: "The Frontier of Actuator Technology: SEA and Beyond", summary: "Summarizing advances in Series Elastic Actuators and next-gen actuator technology trends.", date: "2026.02.28" },
    ],
  },
};

export default function InsightPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>
      <div className="space-y-6">
        {t.articles.map((a) => (
          <article key={a.title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs text-gray-400 mb-2">{a.date}</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h3>
            <p className="text-gray-600 text-sm">{a.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
