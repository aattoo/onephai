"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Manipulators",
    subtitle: "매니퓰레이터 — 산업과 연구의 핵심 로봇 팔",
    desc: "매니퓰레이터 키트는 로봇 팔의 설계, 제어, 그리고 AI 통합을 위한 모듈을 제공합니다. 산업용부터 연구용까지 다양한 스케일의 매니퓰레이터를 다룹니다.",
    items: [
      { name: "6-DOF Robot Arm", desc: "범용 6자유도 로봇 팔 제어 및 경로 계획 모듈" },
      { name: "Collaborative Robot (Cobot)", desc: "인간과 안전하게 협업하는 협동 로봇 모듈" },
      { name: "Dexterous Hand", desc: "다수의 자유도를 가진 로봇 핸드 — 정밀 조작 모듈" },
    ],
  },
  en: {
    title: "Manipulators",
    subtitle: "Manipulators — Essential robot arms for industry and research",
    desc: "The manipulator kit provides modules for designing, controlling, and AI-integrating robot arms. It covers manipulators of various scales from industrial to research applications.",
    items: [
      { name: "6-DOF Robot Arm", desc: "General-purpose 6-DOF robot arm control and path planning modules" },
      { name: "Collaborative Robot (Cobot)", desc: "Collaborative robot modules for safe human-robot interaction" },
      { name: "Dexterous Hand", desc: "Multi-DOF robot hand — precision manipulation modules" },
    ],
  },
};

export default function ManipulatorsPage() {
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
