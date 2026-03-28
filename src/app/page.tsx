"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

const PARTNERS = [
  "과학기술정보통신부",
  "대전광역시",
  "KAIST",
  "카이스트홀딩스",
  "연구개발특구",
  "대전테크노파크",
  "대전창조경제혁신센터",
  "엔젬로보틱스",
  "유로보틱스",
  "GT Lab",
];

const content = {
  ko: {
    badge: "Deep Tech Scale-up Valley × KAIST × ONE PhAI",
    title: "Building the Foundation\nof Physical AI Together",
    subtitle: "A Collaborative Platform for Physical AI",
    desc1:
      "로봇이 실제 세계에서 작동하기 위해서는 알고리즘 이상의 것이 필요합니다. 힘을 제어하는 구동기, 환경을 인식하는 센서, 그리고 그 위에서 학습하는 AI까지, 전체 기반이 함께 준비되어야 합니다.",
    desc2:
      "ONE PhAI는 기계공학, 전자공학, AI 연구자들, 그리고 산업 현장의 전문가들과 함께 Physical AI를 구현하기 위한 구조를 설계합니다.",
    whatTitle: "What is ONE PhAI",
    whatDesc:
      "ONE PhAI는 로봇이 현실의 다양한 물리적 변수와 복잡성 속에서 작동할 수 있도록, 하드웨어·제어·데이터가 연결되는 구조를 다룹니다.",
    approachTitle: "Approach",
    approachSubtitle: "The Real World Doesn't Behave Like a Simulation",
    approachDesc:
      "시뮬레이션과 현실 사이에는 간극이 있습니다. 마찰, 중력, 충격은 현실에서 매 순간 달라집니다.",
    backlash: "백래시(Backlash): 감속기 내부 기어 간 유격으로 인한 응답 지연",
    noise: "노이즈(Noise): 센서 신호의 불규칙한 변동",
    elastic: "탄성 변형(Elastic Deformation): 부하에 따라 구조물이 미세하게 휘는 현상",
    approachConclusion:
      "ONE PhAI는 구동기 계층에서 이러한 오차를 먼저 정리하여, AI가 물리적 부담 없이 고차원 판단에 집중할 수 있는 구조를 만듭니다.",
    distTitle: "통합지능에서 분산지능으로",
    distDesc:
      "ONE PhAI는 분산지능 구조를 택합니다. 구동기 계층이 비선형 오차를 흡수하고, 센서 계층이 의미 있는 데이터를 선별하면, AI는 더 좁고 명확한 문제에 집중할 수 있습니다.",
    distPoints: [
      "하위 계층(구동기·센서)이 물리적 외란을 자체 보정",
      "상위 계층(AI)은 정제된 데이터 위에서 패턴 학습과 적응에 집중",
      "환경 변화에 유연하게 대응 가능",
    ],
    sharedTitle: "Shared Autonomy — 전문가와 함께 만드는 데이터",
    sharedDesc:
      "완전 자동화만이 목표는 아닙니다. 초기 단계에서는 로봇이 의도한 동작을 수행하고, 인간 전문가가 그 과정을 관찰하고 개입합니다.",
    sharedPoints: [
      "로봇의 기본 동작을 먼저 확보하고, 인간이 개입하며 학습 데이터 생성",
      "현장 전문가의 암묵적 지식이 명시적 데이터로 변환",
      "이 데이터 위에서 AI는 점진적으로 자율성을 확대",
    ],
    sharedConclusion: "ONE PhAI는 이 공진화 과정 자체를 지원하는 플랫폼입니다.",
    exploreTitle: "Explore",
    overviewDesc: "Physical AI를 실제로 구현한다는 것의 의미를 탐색합니다.",
    structureDesc: "ONE PhAI의 5대 모듈과 그 역할을 이해합니다.",
    cupTitle: "2026년 K-ROBOTICS STARTUP CUP",
    cupDesc: "KAIST에서 피지컬 AI 산업의 등용문, K-ROBOTICS STARTUP CUP 개최",
    cupDeadline: "서류 접수 ~ 26.04.05(일) 자정",
    cupCta: "자세히 보기 →",
    partnersLabel: "By Research & Industry Pioneers",
  },
  en: {
    badge: "Deep Tech Scale-up Valley × KAIST × ONE PhAI",
    title: "Building the Foundation\nof Physical AI Together",
    subtitle: "A Collaborative Platform for Physical AI",
    desc1:
      "For robots to operate in the real world, more than algorithms are needed. Actuators to control force, sensors to perceive the environment, and AI that learns on top — the entire foundation must be prepared together.",
    desc2:
      "ONE PhAI designs the structure for implementing Physical AI with researchers in mechanical engineering, electronics, AI, and industry experts.",
    whatTitle: "What is ONE PhAI",
    whatDesc:
      "ONE PhAI addresses the structure where hardware, control, and data connect so that robots can operate amid real-world physical variables and complexity.",
    approachTitle: "Approach",
    approachSubtitle: "The Real World Doesn't Behave Like a Simulation",
    approachDesc:
      "There is a gap between simulation and reality. Friction, gravity, and impact vary every moment in reality.",
    backlash: "Backlash: Response delay due to gear clearance inside reducers",
    noise: "Noise: Irregular fluctuations in sensor signals",
    elastic: "Elastic Deformation: Subtle bending of structures under load",
    approachConclusion:
      "ONE PhAI organizes these errors at the actuator layer first, creating a structure where AI can focus on high-level decisions without physical burden.",
    distTitle: "From Centralized to Distributed Intelligence",
    distDesc:
      "ONE PhAI adopts a distributed intelligence architecture. When the actuator layer absorbs nonlinear errors and the sensor layer filters meaningful data, AI can focus on narrower, clearer problems.",
    distPoints: [
      "Lower layers (actuators/sensors) self-correct physical disturbances",
      "Upper layer (AI) focuses on pattern learning and adaptation on refined data",
      "Flexible response to environmental changes",
    ],
    sharedTitle: "Shared Autonomy — Data Created with Experts",
    sharedDesc:
      "Full automation is not the only goal. In early stages, robots perform intended actions while human experts observe and intervene.",
    sharedPoints: [
      "Secure basic robot movements first, then generate training data through human intervention",
      "Tacit knowledge of field experts is converted to explicit data",
      "AI gradually expands autonomy on top of this data",
    ],
    sharedConclusion:
      "ONE PhAI is a platform that supports this co-evolution process itself.",
    exploreTitle: "Explore",
    overviewDesc: "Explore what it means to actually implement Physical AI.",
    structureDesc: "Understand the 5 core modules and roles of ONE PhAI.",
    cupTitle: "2026 K-ROBOTICS STARTUP CUP",
    cupDesc:
      "The gateway to the Physical AI industry at KAIST: K-ROBOTICS STARTUP CUP",
    cupDeadline: "Application deadline: Apr 5, 2026 midnight",
    cupCta: "Learn more →",
    partnersLabel: "By Research & Industry Pioneers",
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full mb-6">
            {t.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-blue-200 font-medium mb-4">{t.subtitle}</p>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-3">{t.desc1}</p>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">{t.desc2}</p>
          <div className="flex gap-3">
            <Link
              href="/intro/overview"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/intro/structure"
              className="px-6 py-3 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Platform Structure
            </Link>
          </div>
        </div>

        {/* Startup Cup Banner */}
        <div className="max-w-4xl mx-auto mt-12">
          <Link
            href="/community/challenge"
            className="block bg-gray-800/60 border border-gray-600/40 rounded-xl p-6 hover:border-gray-500/60 hover:bg-gray-800/80 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-blue-300">{t.cupTitle}</span>
              <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full font-bold">
                D-10
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-2">{t.cupDesc}</p>
            <p className="text-gray-400 text-xs mb-2">{t.cupDeadline}</p>
            <span className="text-blue-400 text-sm font-medium">{t.cupCta}</span>
          </Link>
        </div>

        {/* Partners */}
        <div className="max-w-4xl mx-auto mt-12">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            {t.partnersLabel}
          </p>
          <div className="flex flex-wrap gap-4">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 text-xs bg-white/10 text-gray-300 rounded-md"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What is ONE PhAI */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.whatTitle}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.whatDesc}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.approachTitle}</h2>
            <h3 className="text-xl text-gray-700 font-medium mb-4">
              {t.approachSubtitle}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">{t.approachDesc}</p>
            <ul className="space-y-2 mb-6">
              {[t.backlash, t.noise, t.elastic].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <span className="text-blue-500 mt-1">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium">{t.approachConclusion}</p>
          </div>

          {/* Distributed Intelligence */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.distTitle}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t.distDesc}</p>
            <ul className="space-y-2">
              {t.distPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500 mt-1">&#10003;</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Shared Autonomy */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.sharedTitle}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t.sharedDesc}</p>
            <ul className="space-y-2 mb-4">
              {t.sharedPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-gray-600">
                  <span className="text-green-500 mt-1">&#10003;</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium">{t.sharedConclusion}</p>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.exploreTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/intro/overview"
              className="group block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-[border-color,box-shadow] duration-200"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Overview
              </h3>
              <p className="text-gray-600 text-sm">{t.overviewDesc}</p>
            </Link>
            <Link
              href="/intro/structure"
              className="group block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-[border-color,box-shadow] duration-200"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                Platform Structure
              </h3>
              <p className="text-gray-600 text-sm">{t.structureDesc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 bg-gray-900 text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p>&copy; 2026 ONE PhAI. All rights reserved.</p>
          <p>Deep Tech Scale-up Valley &times; KAIST</p>
        </div>
      </footer>
    </div>
  );
}
