"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

type Category = "all" | "school" | "industry" | "research" | "collab";

type Article = {
  title: string;
  summary: string;
  date: string;
  author: string;
  authorInitial: string;
  category: Category;
  tags: string[];
  quote?: string;
  featured?: boolean;
  gradient: string;
};

const articles: Record<string, Article[]> = {
  ko: [
    {
      title: "Physical AI의 산업화를 향하여",
      summary:
        "Physical AI는 마찰력·중력·관성 등 실세계 물리 법칙을 지능에 통합하여, 로봇이 실제 환경에서 유의미한 과업을 수행하게 하는 차세대 패러다임입니다.",
      date: "2026.03.20",
      author: "김정",
      authorInitial: "김",
      category: "school",
      tags: ["학교", "인터뷰"],
      featured: true,
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "물리를 품은 AI가 로봇을 완성",
      summary:
        "현재 로봇 AI는 물체의 형상은 인식하지만, 질량·마찰·변형 같은 물리적 속성은 고려하지 못합니다. Physical AI는 이 간극을 메울 핵심 기술입니다.",
      date: "2026.03.12",
      author: "명현",
      authorInitial: "명",
      category: "school",
      tags: ["학교"],
      quote:
        "연구는 자기만족이 아니라 세상에 도움이 될 수 있는 기술을 만드는 과정이라고 생각합니다.",
      gradient: "from-blue-600 to-indigo-800",
    },
    {
      title: "Sim-to-Real Transfer의 현재와 미래",
      summary:
        "시뮬레이션에서 훈련된 정책이 실제 로봇에서 작동하기까지의 여정과 남은 과제를 살펴봅니다.",
      date: "2026.03.15",
      author: "이준호",
      authorInitial: "이",
      category: "research",
      tags: ["연구기관"],
      gradient: "from-emerald-600 to-teal-800",
    },
    {
      title: "분산지능 아키텍처가 로봇 제어를 바꾸는 방법",
      summary:
        "중앙 집중식 제어에서 계층별 분산 지능으로의 패러다임 전환을 분석합니다.",
      date: "2026.03.08",
      author: "박서연",
      authorInitial: "박",
      category: "industry",
      tags: ["산업계"],
      gradient: "from-violet-600 to-purple-800",
    },
    {
      title: "구동기 기술의 최전선: SEA와 그 너머",
      summary:
        "Series Elastic Actuator의 발전과 차세대 구동기 기술 동향을 정리합니다.",
      date: "2026.02.28",
      author: "최민수",
      authorInitial: "최",
      category: "collab",
      tags: ["산학협력"],
      gradient: "from-amber-600 to-orange-800",
    },
  ],
  en: [
    {
      title: "Toward the Industrialization of Physical AI",
      summary:
        "Physical AI integrates real-world physics like friction, gravity, and inertia into intelligence, enabling robots to perform meaningful tasks in real environments.",
      date: "2026.03.20",
      author: "J. Kim",
      authorInitial: "K",
      category: "school",
      tags: ["School", "Interview"],
      featured: true,
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "AI Embracing Physics Completes the Robot",
      summary:
        "Current robot AI recognizes object shapes but fails to account for physical properties like mass, friction, and deformation. Physical AI bridges this gap.",
      date: "2026.03.12",
      author: "M. Hyun",
      authorInitial: "M",
      category: "school",
      tags: ["School"],
      quote:
        "Research is not self-satisfaction — it's the process of creating technology that can help the world.",
      gradient: "from-blue-600 to-indigo-800",
    },
    {
      title: "The Present and Future of Sim-to-Real Transfer",
      summary:
        "Exploring the journey and remaining challenges of getting simulation-trained policies to work on real robots.",
      date: "2026.03.15",
      author: "J. Lee",
      authorInitial: "L",
      category: "research",
      tags: ["Research"],
      gradient: "from-emerald-600 to-teal-800",
    },
    {
      title: "How Distributed Intelligence Changes Robot Control",
      summary:
        "Analyzing the paradigm shift from centralized control to layer-wise distributed intelligence.",
      date: "2026.03.08",
      author: "S. Park",
      authorInitial: "P",
      category: "industry",
      tags: ["Industry"],
      gradient: "from-violet-600 to-purple-800",
    },
    {
      title: "Frontier of Actuator Tech: SEA and Beyond",
      summary:
        "Summarizing advances in Series Elastic Actuators and next-gen actuator technology trends.",
      date: "2026.02.28",
      author: "M. Choi",
      authorInitial: "C",
      category: "collab",
      tags: ["Collaboration"],
      gradient: "from-amber-600 to-orange-800",
    },
  ],
};

const CATEGORIES: Record<string, Record<Category, string>> = {
  ko: { all: "All", school: "학교", industry: "산업계", research: "연구기관", collab: "산학협력" },
  en: { all: "All", school: "School", industry: "Industry", research: "Research", collab: "Collaboration" },
};

export default function InsightPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const t = {
    ko: {
      breadcrumb: "PhAI Intro",
      title: "Insight",
      subtitle: "Physical AI를 둘러싼 전문가들의 관심을 소개합니다.",
      newInsight: "+ 새 인사이트 작성",
      featured: "FEATURED",
      readMore: "Read more",
    },
    en: {
      breadcrumb: "PhAI Intro",
      title: "Insight",
      subtitle: "Introducing expert perspectives on Physical AI.",
      newInsight: "+ New Insight",
      featured: "FEATURED",
      readMore: "Read more",
    },
  };

  const c = t[lang];
  const allArticles = articles[lang];
  const filtered =
    activeCategory === "all"
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  const featuredArticle = filtered.find((a) => a.featured);
  const regularArticles = filtered.filter((a) => !a.featured);

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Breadcrumb */}
      <p className="text-sm text-blue-600 font-medium mb-4">{c.breadcrumb}</p>

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-3">{c.title}</h1>
      <p className="text-lg text-gray-500 mb-8">{c.subtitle}</p>

      {/* Category Tabs */}
      <div className="flex items-center gap-1 border-b border-gray-200 mb-8">
        {(Object.entries(CATEGORIES[lang]) as [Category, string][]).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
              activeCategory === key
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {label}
            {activeCategory === key && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* New Insight Button */}
      <button className="mb-8 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
        {c.newInsight}
      </button>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Placeholder */}
            <div
              className={`md:w-1/2 h-64 md:h-auto bg-gradient-to-br ${featuredArticle.gradient} relative flex items-end p-6`}
            >
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                {c.featured}
              </span>
              <div className="w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {featuredArticle.authorInitial}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex gap-2 mb-3">
                {featuredArticle.tags.map((tag) => (
                  <span key={tag} className="text-xs text-blue-600 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    {featuredArticle.authorInitial}
                  </span>
                  <span className="text-sm text-gray-700">{featuredArticle.author}</span>
                </div>
                <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                  {c.readMore} &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularArticles.map((article) => (
          <div
            key={article.title}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
          >
            {/* Card Image / Visual */}
            <div
              className={`h-48 bg-gradient-to-br ${article.gradient} relative flex items-center justify-center p-6`}
            >
              {/* Category Badge */}
              <span className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded">
                {article.tags[0]}
              </span>

              {article.quote ? (
                <div className="text-white/90 text-center px-4">
                  <span className="text-2xl leading-none">&ldquo;</span>
                  <p className="text-xs leading-relaxed mt-1">{article.quote}</p>
                  <span className="text-2xl leading-none">&rdquo;</span>
                  <p className="text-[10px] text-white/60 mt-2">
                    {article.author}
                  </p>
                </div>
              ) : (
                <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {article.authorInitial}
                  </span>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                {article.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                    {article.authorInitial}
                  </span>
                  <span className="text-xs text-gray-600">{article.author}</span>
                </div>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
