"use client";

import { useLang } from "@/contexts/LanguageContext";

const modules = {
  ko: [
    { name: "Actuator Layer", desc: "구동기 계층 — 백래시, 마찰 등 비선형 오차를 하드웨어 수준에서 보정합니다.", color: "bg-blue-500" },
    { name: "Sensor Layer", desc: "센서 계층 — 노이즈를 필터링하고 의미 있는 환경 정보를 추출합니다.", color: "bg-green-500" },
    { name: "AI Layer", desc: "AI 계층 — 정제된 데이터 위에서 패턴 학습과 판단을 수행합니다.", color: "bg-purple-500" },
    { name: "Data Layer", desc: "데이터 계층 — Shared Autonomy를 통해 축적된 학습 데이터를 관리합니다.", color: "bg-orange-500" },
    { name: "Integration Layer", desc: "통합 계층 — 각 모듈 간 인터페이스와 전체 시스템 조율을 담당합니다.", color: "bg-red-500" },
  ],
  en: [
    { name: "Actuator Layer", desc: "Corrects nonlinear errors like backlash and friction at the hardware level.", color: "bg-blue-500" },
    { name: "Sensor Layer", desc: "Filters noise and extracts meaningful environmental information.", color: "bg-green-500" },
    { name: "AI Layer", desc: "Performs pattern learning and decision-making on refined data.", color: "bg-purple-500" },
    { name: "Data Layer", desc: "Manages training data accumulated through Shared Autonomy.", color: "bg-orange-500" },
    { name: "Integration Layer", desc: "Handles interfaces between modules and overall system orchestration.", color: "bg-red-500" },
  ],
};

export default function StructurePage() {
  const { lang } = useLang();
  const title = lang === "ko" ? "Platform Structure" : "Platform Structure";
  const subtitle =
    lang === "ko"
      ? "ONE PhAI의 5대 모듈과 그 역할"
      : "The 5 core modules and their roles";

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-12">{subtitle}</p>
      <div className="space-y-4">
        {modules[lang].map((m, i) => (
          <div
            key={m.name}
            className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-lg ${m.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
              {i + 1}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{m.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
