"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Wearable Robots",
    subtitle: "웨어러블 로봇 — 인간 신체 능력의 확장",
    desc: "웨어러블 로봇 키트는 외골격 로봇, 재활 로봇, 보조 장치 등 인간과 직접 상호작용하는 로봇 시스템을 위한 모듈을 제공합니다.",
    items: [
      { name: "Upper-limb Exoskeleton", desc: "상지 외골격 로봇 설계 및 제어 모듈" },
      { name: "Lower-limb Exoskeleton", desc: "보행 보조 및 재활을 위한 하지 외골격 모듈" },
      { name: "Hand Exoskeleton", desc: "정밀 파지를 위한 손 외골격 장치" },
    ],
  },
  en: {
    title: "Wearable Robots",
    subtitle: "Wearable Robots — Extending human physical capabilities",
    desc: "The wearable robot kit provides modules for robot systems that directly interact with humans, including exoskeletons, rehabilitation robots, and assistive devices.",
    items: [
      { name: "Upper-limb Exoskeleton", desc: "Upper-limb exoskeleton design and control modules" },
      { name: "Lower-limb Exoskeleton", desc: "Lower-limb exoskeleton modules for gait assistance and rehabilitation" },
      { name: "Hand Exoskeleton", desc: "Hand exoskeleton devices for precision grasping" },
    ],
  },
};

export default function WearablePage() {
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
