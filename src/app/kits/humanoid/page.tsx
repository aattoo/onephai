"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Humanoid Robots",
    subtitle: "휴머노이드 로봇 — Physical AI의 궁극적 플랫폼",
    desc: "휴머노이드 키트는 이족 보행, 전신 제어, 인간형 로봇의 통합 시스템을 위한 모듈을 제공합니다. 구동기, 센서, AI 모든 계층이 결합되는 가장 복잡한 Physical AI 시스템입니다.",
    items: [
      { name: "Bipedal Locomotion", desc: "이족 보행 제어 — 동적 균형, 지형 적응, 계단 오르기" },
      { name: "Whole-body Control", desc: "전신 동역학 기반 통합 제어 모듈" },
      { name: "Human-Robot Interaction", desc: "자연스러운 인간-로봇 상호작용을 위한 인터페이스 모듈" },
    ],
  },
  en: {
    title: "Humanoid Robots",
    subtitle: "Humanoid Robots — The ultimate Physical AI platform",
    desc: "The humanoid kit provides modules for bipedal locomotion, whole-body control, and humanoid integrated systems. It is the most complex Physical AI system combining actuator, sensor, and AI layers.",
    items: [
      { name: "Bipedal Locomotion", desc: "Bipedal walking control — dynamic balance, terrain adaptation, stair climbing" },
      { name: "Whole-body Control", desc: "Integrated control module based on whole-body dynamics" },
      { name: "Human-Robot Interaction", desc: "Interface modules for natural human-robot interaction" },
    ],
  },
};

export default function HumanoidPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{t.subtitle}</p>
      <p className="text-gray-600 leading-relaxed mb-12">{t.desc}</p>
      <div className="space-y-4">
        {t.items.map((m) => (
          <div key={m.name} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">{m.name}</h3>
            <p className="text-gray-600 text-sm">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
