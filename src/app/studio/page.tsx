"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "PhAI Studio",
    subtitle: "Physical AI 시뮬레이션 및 개발 환경",
    desc: "PhAI Studio는 구동기 모델링, 센서 시뮬레이션, AI 학습 환경을 통합한 웹 기반 개발 도구입니다. 실제 하드웨어 없이도 Physical AI 알고리즘을 설계하고 검증할 수 있습니다.",
    features: [
      { name: "구동기 시뮬레이터", desc: "백래시, 마찰, 탄성 변형을 포함한 고정밀 구동기 시뮬레이션 환경" },
      { name: "센서 파이프라인", desc: "가상 센서 데이터 생성 및 노이즈 모델링 도구" },
      { name: "학습 환경", desc: "강화학습 및 모방 학습을 위한 통합 훈련 환경" },
      { name: "Sim-to-Real 브릿지", desc: "시뮬레이션에서 실제 로봇으로의 전환을 지원하는 도구" },
    ],
    status: "현재 베타 서비스 중입니다. 접근 권한은 Academy 프로그램 수료자 및 파트너 기관에 제공됩니다.",
  },
  en: {
    title: "PhAI Studio",
    subtitle: "Physical AI Simulation & Development Environment",
    desc: "PhAI Studio is a web-based development tool integrating actuator modeling, sensor simulation, and AI training environments. Design and validate Physical AI algorithms without actual hardware.",
    features: [
      { name: "Actuator Simulator", desc: "High-fidelity actuator simulation environment including backlash, friction, and elastic deformation" },
      { name: "Sensor Pipeline", desc: "Virtual sensor data generation and noise modeling tools" },
      { name: "Training Environment", desc: "Integrated training environment for reinforcement learning and imitation learning" },
      { name: "Sim-to-Real Bridge", desc: "Tools supporting the transition from simulation to real robots" },
    ],
    status: "Currently in beta. Access is provided to Academy program graduates and partner institutions.",
  },
};

export default function StudioPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{t.subtitle}</p>
      <p className="text-gray-600 leading-relaxed mb-12">{t.desc}</p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {t.features.map((f) => (
          <div key={f.name} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">{f.name}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
        {t.status}
      </div>
    </div>
  );
}
