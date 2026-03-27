"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Sensor Modules",
    subtitle: "센서 모듈 — 로봇의 감각을 담당하는 계층",
    desc: "센서 모듈은 환경 정보를 수집하고 의미 있는 데이터로 변환합니다. 노이즈 필터링, 센서 퓨전, 실시간 상태 추정 기술을 제공합니다.",
    modules: [
      { name: "Force/Torque Sensor", desc: "6축 힘/토크 센서를 통한 정밀 접촉 감지" },
      { name: "IMU Module", desc: "관성 측정 장치를 활용한 자세 추정 및 동작 인식" },
      { name: "Vision System", desc: "RGB-D 카메라 및 LiDAR 기반 환경 인식 모듈" },
      { name: "Tactile Sensor", desc: "촉각 센서를 통한 물체 표면 특성 인식" },
    ],
  },
  en: {
    title: "Sensor Modules",
    subtitle: "Sensor Modules — The layer responsible for robot perception",
    desc: "Sensor modules collect environmental information and transform it into meaningful data. They provide noise filtering, sensor fusion, and real-time state estimation technologies.",
    modules: [
      { name: "Force/Torque Sensor", desc: "Precision contact detection through 6-axis force/torque sensors" },
      { name: "IMU Module", desc: "Pose estimation and motion recognition using inertial measurement units" },
      { name: "Vision System", desc: "Environment perception module based on RGB-D cameras and LiDAR" },
      { name: "Tactile Sensor", desc: "Object surface property recognition through tactile sensors" },
    ],
  },
};

export default function SensorPage() {
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
