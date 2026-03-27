"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Overview",
    subtitle: "Physical AI를 실제로 구현한다는 것의 의미",
    sections: [
      {
        heading: "Physical AI란 무엇인가",
        body: "Physical AI는 디지털 세계의 AI를 물리적 세계로 확장하는 것입니다. 로봇이 실제 환경에서 물체를 잡고, 이동하고, 조립하는 과정에서 발생하는 물리적 불확실성을 AI가 이해하고 대응할 수 있어야 합니다.",
      },
      {
        heading: "왜 Physical AI가 어려운가",
        body: "시뮬레이션에서는 완벽하게 작동하는 알고리즘이 현실에서는 실패합니다. 마찰, 중력, 탄성, 온도 변화 등 무수한 물리적 변수가 존재하기 때문입니다. 이 간극을 Sim-to-Real Gap이라 합니다.",
      },
      {
        heading: "ONE PhAI의 접근",
        body: "ONE PhAI는 이 문제를 단일 AI 모델이 아닌, 계층화된 구조로 해결합니다. 구동기 → 센서 → AI 각 계층이 자신의 영역에서 불확실성을 흡수하고, 상위 계층은 정제된 정보 위에서 판단합니다.",
      },
    ],
  },
  en: {
    title: "Overview",
    subtitle: "What it means to actually implement Physical AI",
    sections: [
      {
        heading: "What is Physical AI",
        body: "Physical AI extends digital AI into the physical world. AI must understand and respond to physical uncertainties that arise as robots grasp, move, and assemble objects in real environments.",
      },
      {
        heading: "Why is Physical AI difficult",
        body: "Algorithms that work perfectly in simulation fail in reality. Countless physical variables exist — friction, gravity, elasticity, temperature changes. This gap is called the Sim-to-Real Gap.",
      },
      {
        heading: "ONE PhAI's approach",
        body: "ONE PhAI solves this not with a single AI model, but with a layered architecture. Each layer — actuator → sensor → AI — absorbs uncertainty in its domain, while upper layers make decisions on refined information.",
      },
    ],
  },
};

export default function OverviewPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>
      <div className="space-y-10">
        {t.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{s.heading}</h2>
            <p className="text-gray-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
