"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

export default function ChallengePage() {
  const { lang } = useLang();

  const t = {
    ko: {
      title: "K-ROBOTICS STARTUP CUP 2026",
      subtitle: "KAIST에서 피지컬 AI 산업의 등용문",
      deadline: "서류 접수 마감: 2026.04.05(일) 자정",
      desc: "K-ROBOTICS STARTUP CUP은 Physical AI 분야의 혁신적인 스타트업을 발굴하고 지원하기 위한 대회입니다. KAIST와 ONE PhAI가 함께 주최하며, 우수 팀에게는 투자 연계, 기술 멘토링, KAIST 연구 인프라 활용 기회가 제공됩니다.",
      tracks: [
        { name: "Track A: 구동기/센서", desc: "로봇 하드웨어의 핵심 부품 혁신" },
        { name: "Track B: AI/제어", desc: "로봇 지능과 제어 알고리즘" },
        { name: "Track C: 시스템 통합", desc: "전체 로봇 시스템 및 응용" },
      ],
      benefits: "참가 혜택",
      benefitList: [
        "최대 1억원 투자 연계",
        "KAIST 연구 인프라 6개월 무상 이용",
        "전문가 기술 멘토링 프로그램",
        "데모데이 및 투자자 네트워킹",
      ],
    },
    en: {
      title: "K-ROBOTICS STARTUP CUP 2026",
      subtitle: "The gateway to the Physical AI industry at KAIST",
      deadline: "Application deadline: April 5, 2026 (Sun) midnight",
      desc: "K-ROBOTICS STARTUP CUP is a competition to discover and support innovative startups in the Physical AI field. Co-hosted by KAIST and ONE PhAI, winning teams receive investment connections, technical mentoring, and access to KAIST research infrastructure.",
      tracks: [
        { name: "Track A: Actuators/Sensors", desc: "Innovation in core robot hardware components" },
        { name: "Track B: AI/Control", desc: "Robot intelligence and control algorithms" },
        { name: "Track C: System Integration", desc: "Complete robot systems and applications" },
      ],
      benefits: "Benefits",
      benefitList: [
        "Up to 100M KRW investment connections",
        "6 months free access to KAIST research infrastructure",
        "Expert technical mentoring program",
        "Demo day and investor networking",
      ],
    },
  };

  const c = t[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="inline-block px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full font-bold mb-4">
        D-10
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{c.title}</h1>
      <p className="text-lg text-gray-500 mb-2">{c.subtitle}</p>
      <p className="text-sm text-red-600 font-medium mb-8">{c.deadline}</p>
      <p className="text-gray-600 leading-relaxed mb-12">{c.desc}</p>

      {/* Tracks */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {c.tracks.map((track) => (
          <div
            key={track.name}
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <h3 className="font-bold text-gray-900 mb-2">{track.name}</h3>
            <p className="text-gray-600 text-sm">{track.desc}</p>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="mb-12">
        <Link
          href="/community/challenge/apply"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          {lang === "ko" ? "참가 신청하기" : "Apply Now"}
        </Link>
      </div>

      {/* Benefits */}
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{c.benefits}</h3>
        <ul className="space-y-2">
          {c.benefitList.map((b) => (
            <li key={b} className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">&#10003;</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
