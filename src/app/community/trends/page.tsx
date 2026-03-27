"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Trends",
    subtitle: "Physical AI 산업과 기술 트렌드",
    items: [
      { tag: "산업 동향", title: "2026년 로보틱스 투자 트렌드", desc: "올해 상반기 글로벌 로보틱스 투자 동향과 Physical AI 분야의 성장세를 분석합니다." },
      { tag: "기술 트렌드", title: "Foundation Model과 로봇의 만남", desc: "대규모 언어 모델과 비전 모델이 로봇 제어에 적용되는 최신 사례를 소개합니다." },
      { tag: "정책", title: "정부 로봇 산업 육성 정책 업데이트", desc: "과학기술정보통신부의 로봇 산업 지원 정책 변화와 시사점을 정리합니다." },
    ],
  },
  en: {
    title: "Trends",
    subtitle: "Physical AI industry and technology trends",
    items: [
      { tag: "Industry", title: "2026 Robotics Investment Trends", desc: "Analyzing global robotics investment trends and growth in Physical AI for the first half of this year." },
      { tag: "Technology", title: "Foundation Models Meet Robotics", desc: "Introducing the latest cases of large language models and vision models applied to robot control." },
      { tag: "Policy", title: "Government Robot Industry Policy Updates", desc: "Summarizing changes and implications in MSIT's robot industry support policies." },
    ],
  },
};

export default function TrendsPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>
      <div className="space-y-6">
        {t.items.map((item) => (
          <article key={item.title} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded-full font-medium">{item.tag}</span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
