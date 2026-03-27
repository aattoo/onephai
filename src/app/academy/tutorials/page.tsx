"use client";

import { useLang } from "@/contexts/LanguageContext";

const content = {
  ko: {
    title: "Tutorials",
    subtitle: "단계별 실습 가이드",
    tutorials: [
      { title: "구동기 캘리브레이션 시작하기", category: "Actuator", difficulty: "입문", steps: 5 },
      { title: "IMU 센서 데이터 전처리", category: "Sensor", difficulty: "입문", steps: 4 },
      { title: "ROS2에서 토크 제어 구현하기", category: "Control", difficulty: "중급", steps: 8 },
      { title: "Sim-to-Real Transfer 파이프라인 구축", category: "AI", difficulty: "고급", steps: 12 },
      { title: "Shared Autonomy 데이터 수집 환경 설정", category: "Data", difficulty: "중급", steps: 6 },
      { title: "로봇 팔 역기구학 솔버 구현", category: "Control", difficulty: "고급", steps: 10 },
    ],
  },
  en: {
    title: "Tutorials",
    subtitle: "Step-by-step hands-on guides",
    tutorials: [
      { title: "Getting Started with Actuator Calibration", category: "Actuator", difficulty: "Beginner", steps: 5 },
      { title: "IMU Sensor Data Preprocessing", category: "Sensor", difficulty: "Beginner", steps: 4 },
      { title: "Implementing Torque Control in ROS2", category: "Control", difficulty: "Intermediate", steps: 8 },
      { title: "Building a Sim-to-Real Transfer Pipeline", category: "AI", difficulty: "Advanced", steps: 12 },
      { title: "Setting Up Shared Autonomy Data Collection", category: "Data", difficulty: "Intermediate", steps: 6 },
      { title: "Implementing Robot Arm Inverse Kinematics Solver", category: "Control", difficulty: "Advanced", steps: 10 },
    ],
  },
};

const categoryColors: Record<string, string> = {
  Actuator: "bg-blue-50 text-blue-600",
  Sensor: "bg-green-50 text-green-600",
  Control: "bg-purple-50 text-purple-600",
  AI: "bg-orange-50 text-orange-600",
  Data: "bg-pink-50 text-pink-600",
};

export default function TutorialsPage() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{t.subtitle}</p>
      <div className="space-y-4">
        {t.tutorials.map((tut) => (
          <div key={tut.title} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[tut.category]}`}>{tut.category}</span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{tut.difficulty}</span>
            </div>
            <h3 className="font-medium text-gray-900 flex-1">{tut.title}</h3>
            <span className="text-xs text-gray-400 shrink-0">{tut.steps} steps</span>
          </div>
        ))}
      </div>
    </div>
  );
}
