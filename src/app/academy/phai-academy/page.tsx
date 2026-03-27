"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "PhAI Academy",
    subtitle: "Physical AI 전문가 양성 프로그램",
    desc: "PhAI Academy는 로보틱스, 구동기, 센서, AI 제어 분야의 체계적인 교육 프로그램을 제공합니다. KAIST 교수진과 산업 전문가가 함께 설계한 커리큘럼을 통해 Physical AI의 핵심 역량을 기를 수 있습니다.",
    programs: [
      { name: "Foundation Course", duration: "8주", desc: "Physical AI 기초 — 구동기, 센서, 제어 이론의 기본 개념을 다룹니다.", level: "입문" },
      { name: "Advanced Actuator Design", duration: "6주", desc: "SEA, 백래시 보정, 토크 제어 등 구동기 설계의 심화 과정입니다.", level: "중급" },
      { name: "AI for Robotics", duration: "10주", desc: "강화학습, Sim-to-Real Transfer, Imitation Learning 등 로봇 AI 기법을 실습합니다.", level: "고급" },
      { name: "System Integration Workshop", duration: "4주", desc: "하드웨어와 소프트웨어를 통합하여 실제 로봇 시스템을 구축하는 워크숍입니다.", level: "고급" },
    ],
  },
  en: {
    title: "PhAI Academy",
    subtitle: "Physical AI Expert Training Program",
    desc: "PhAI Academy provides systematic educational programs in robotics, actuators, sensors, and AI control. Through curricula designed by KAIST faculty and industry experts, you can build core competencies in Physical AI.",
    programs: [
      { name: "Foundation Course", duration: "8 weeks", desc: "Physical AI fundamentals — covering basic concepts of actuators, sensors, and control theory.", level: "Beginner" },
      { name: "Advanced Actuator Design", duration: "6 weeks", desc: "Advanced course in actuator design including SEA, backlash correction, and torque control.", level: "Intermediate" },
      { name: "AI for Robotics", duration: "10 weeks", desc: "Hands-on practice with reinforcement learning, Sim-to-Real Transfer, and Imitation Learning.", level: "Advanced" },
      { name: "System Integration Workshop", duration: "4 weeks", desc: "Workshop on building actual robot systems by integrating hardware and software.", level: "Advanced" },
    ],
  },
};

export default function PhAIAcademyPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{t.subtitle}</p>
      <p className="text-gray-600 leading-relaxed mb-12">{t.desc}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {t.programs.map((p) => (
          <div key={p.name} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">{p.level}</span>
              <span className="text-xs text-gray-400">{p.duration}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
