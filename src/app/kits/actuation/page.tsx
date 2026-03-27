"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Actuation Modules",
    subtitle: "구동기 모듈 — Physical AI의 힘을 만드는 계층",
    desc: "구동기 모듈은 로봇이 물리적 세계와 상호작용하는 핵심 인터페이스입니다. 백래시 보정, 토크 제어, 임피던스 제어 등 구동기 계층의 비선형 오차를 흡수하는 기술을 제공합니다.",
    modules: [
      { name: "Series Elastic Actuator (SEA)", desc: "탄성 요소를 통해 힘 센싱과 충격 흡수를 동시에 달성하는 구동기" },
      { name: "Quasi-Direct Drive (QDD)", desc: "낮은 기어비로 높은 투명도와 백드라이버빌리티를 제공하는 구동기" },
      { name: "Hydraulic Actuator", desc: "높은 출력밀도가 필요한 대형 로봇을 위한 유압 구동기" },
      { name: "Soft Actuator", desc: "유연한 재료 기반의 소프트 로보틱스용 구동기" },
    ],
  },
  en: {
    title: "Actuation Modules",
    subtitle: "Actuator Modules — The layer that creates Physical AI's force",
    desc: "Actuator modules are the core interface through which robots interact with the physical world. They provide technologies for absorbing nonlinear errors in the actuator layer, including backlash correction, torque control, and impedance control.",
    modules: [
      { name: "Series Elastic Actuator (SEA)", desc: "Actuators achieving force sensing and shock absorption through elastic elements" },
      { name: "Quasi-Direct Drive (QDD)", desc: "Actuators providing high transparency and backdrivability with low gear ratios" },
      { name: "Hydraulic Actuator", desc: "Hydraulic actuators for large robots requiring high power density" },
      { name: "Soft Actuator", desc: "Flexible material-based actuators for soft robotics" },
    ],
  },
};

export default function ActuationPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{t.subtitle}</p>
      <p className="text-gray-600 leading-relaxed mb-12">{t.desc}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {t.modules.map((m) => (
          <div key={m.name} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">{m.name}</h3>
            <p className="text-gray-600 text-sm">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
