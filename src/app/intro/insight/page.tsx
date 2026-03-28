"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

type Category = "all" | "school" | "industry" | "research" | "collab";

type Insight = {
  id: string;
  title: string;
  summary: string;
  created_at: string;
  author_name: string;
  author_initial: string;
  category: string;
  tags: string[];
  quote: string | null;
  featured: boolean;
  gradient: string;
  lang: string;
  status: string;
};

const GRADIENTS = [
  "from-slate-700 to-slate-900",
  "from-blue-600 to-indigo-800",
  "from-emerald-600 to-teal-800",
  "from-violet-600 to-purple-800",
  "from-amber-600 to-orange-800",
  "from-rose-600 to-pink-800",
  "from-cyan-600 to-blue-800",
];

const CATEGORIES: Record<string, Record<Category, string>> = {
  ko: { all: "All", school: "학교", industry: "산업계", research: "연구기관", collab: "산학협력" },
  en: { all: "All", school: "School", industry: "Industry", research: "Research", collab: "Collaboration" },
};

const CATEGORY_TAGS: Record<string, Record<string, string>> = {
  ko: { school: "학교", industry: "산업계", research: "연구기관", collab: "산학협력" },
  en: { school: "School", industry: "Industry", research: "Research", collab: "Collaboration" },
};

// 하드코딩된 기본 데이터 (DB가 비어있을 때 표시)
const SEED_ARTICLES: Record<string, Omit<Insight, "id" | "status">[]> = {
  ko: [
    {
      title: "Physical AI의 산업화를 향하여",
      summary:
        "Physical AI는 마찰력·중력·관성 등 실세계 물리 법칙을 지능에 통합하여, 로봇이 실제 환경에서 유의미한 과업을 수행하게 하는 차세대 패러다임입니다.",
      created_at: "2026-03-20",
      author_name: "김정",
      author_initial: "김",
      category: "school",
      tags: ["학교", "인터뷰"],
      featured: true,
      gradient: "from-slate-700 to-slate-900",
      lang: "ko",
      quote: null,
    },
    {
      title: "물리를 품은 AI가 로봇을 완성",
      summary:
        "현재 로봇 AI는 물체의 형상은 인식하지만, 질량·마찰·변형 같은 물리적 속성은 고려하지 못합니다. Physical AI는 이 간극을 메울 핵심 기술입니다.",
      created_at: "2026-03-12",
      author_name: "명현",
      author_initial: "명",
      category: "school",
      tags: ["학교"],
      quote: "연구는 자기만족이 아니라 세상에 도움이 될 수 있는 기술을 만드는 과정이라고 생각합니다.",
      featured: false,
      gradient: "from-blue-600 to-indigo-800",
      lang: "ko",
    },
    {
      title: "Sim-to-Real Transfer의 현재와 미래",
      summary: "시뮬레이션에서 훈련된 정책이 실제 로봇에서 작동하기까지의 여정과 남은 과제를 살펴봅니다.",
      created_at: "2026-03-15",
      author_name: "이준호",
      author_initial: "이",
      category: "research",
      tags: ["연구기관"],
      featured: false,
      gradient: "from-emerald-600 to-teal-800",
      lang: "ko",
      quote: null,
    },
    {
      title: "분산지능 아키텍처가 로봇 제어를 바꾸는 방법",
      summary: "중앙 집중식 제어에서 계층별 분산 지능으로의 패러다임 전환을 분석합니다.",
      created_at: "2026-03-08",
      author_name: "박서연",
      author_initial: "박",
      category: "industry",
      tags: ["산업계"],
      featured: false,
      gradient: "from-violet-600 to-purple-800",
      lang: "ko",
      quote: null,
    },
    {
      title: "구동기 기술의 최전선: SEA와 그 너머",
      summary: "Series Elastic Actuator의 발전과 차세대 구동기 기술 동향을 정리합니다.",
      created_at: "2026-02-28",
      author_name: "최민수",
      author_initial: "최",
      category: "collab",
      tags: ["산학협력"],
      featured: false,
      gradient: "from-amber-600 to-orange-800",
      lang: "ko",
      quote: null,
    },
  ],
  en: [
    {
      title: "Toward the Industrialization of Physical AI",
      summary:
        "Physical AI integrates real-world physics like friction, gravity, and inertia into intelligence, enabling robots to perform meaningful tasks in real environments.",
      created_at: "2026-03-20",
      author_name: "J. Kim",
      author_initial: "K",
      category: "school",
      tags: ["School", "Interview"],
      featured: true,
      gradient: "from-slate-700 to-slate-900",
      lang: "en",
      quote: null,
    },
    {
      title: "AI Embracing Physics Completes the Robot",
      summary:
        "Current robot AI recognizes object shapes but fails to account for physical properties like mass, friction, and deformation. Physical AI bridges this gap.",
      created_at: "2026-03-12",
      author_name: "M. Hyun",
      author_initial: "M",
      category: "school",
      tags: ["School"],
      quote: "Research is not self-satisfaction — it's the process of creating technology that can help the world.",
      featured: false,
      gradient: "from-blue-600 to-indigo-800",
      lang: "en",
    },
    {
      title: "The Present and Future of Sim-to-Real Transfer",
      summary: "Exploring the journey and remaining challenges of getting simulation-trained policies to work on real robots.",
      created_at: "2026-03-15",
      author_name: "J. Lee",
      author_initial: "L",
      category: "research",
      tags: ["Research"],
      featured: false,
      gradient: "from-emerald-600 to-teal-800",
      lang: "en",
      quote: null,
    },
    {
      title: "How Distributed Intelligence Changes Robot Control",
      summary: "Analyzing the paradigm shift from centralized control to layer-wise distributed intelligence.",
      created_at: "2026-03-08",
      author_name: "S. Park",
      author_initial: "P",
      category: "industry",
      tags: ["Industry"],
      featured: false,
      gradient: "from-violet-600 to-purple-800",
      lang: "en",
      quote: null,
    },
    {
      title: "Frontier of Actuator Tech: SEA and Beyond",
      summary: "Summarizing advances in Series Elastic Actuators and next-gen actuator technology trends.",
      created_at: "2026-02-28",
      author_name: "M. Choi",
      author_initial: "C",
      category: "collab",
      tags: ["Collaboration"],
      featured: false,
      gradient: "from-amber-600 to-orange-800",
      lang: "en",
      quote: null,
    },
  ],
};

export default function InsightPage() {
  const { lang } = useLang();
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const t = {
    ko: {
      breadcrumb: "PhAI Intro",
      title: "Insight",
      subtitle: "Physical AI를 둘러싼 전문가들의 관심을 소개합니다.",
      newInsight: "+ 새 인사이트 작성",
      featured: "FEATURED",
      readMore: "Read more",
      loginRequired: "로그인 후 작성 가능합니다.",
      modalTitle: "새 인사이트 작성",
      fieldTitle: "제목",
      fieldSummary: "요약",
      fieldCategory: "카테고리",
      fieldQuote: "인용문 (선택)",
      cancel: "취소",
      publish: "게시하기",
      publishing: "게시 중...",
      summaryMin: "요약은 최소 20자 이상이어야 합니다.",
    },
    en: {
      breadcrumb: "PhAI Intro",
      title: "Insight",
      subtitle: "Introducing expert perspectives on Physical AI.",
      newInsight: "+ New Insight",
      featured: "FEATURED",
      readMore: "Read more",
      loginRequired: "Please log in to write an insight.",
      modalTitle: "New Insight",
      fieldTitle: "Title",
      fieldSummary: "Summary",
      fieldCategory: "Category",
      fieldQuote: "Quote (Optional)",
      cancel: "Cancel",
      publish: "Publish",
      publishing: "Publishing...",
      summaryMin: "Summary must be at least 20 characters.",
    },
  };

  const c = t[lang];

  const fetchInsights = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("insights")
      .select("*")
      .eq("lang", lang)
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      setInsights(data);
    } else {
      // DB가 비어있으면 시드 데이터 사용
      setInsights(
        SEED_ARTICLES[lang].map((a, i) => ({
          ...a,
          id: `seed-${i}`,
          status: "published",
        }))
      );
    }
    setLoading(false);
  }, [lang]);

  useEffect(() => {
    fetchInsights();
  }, [fetchInsights]);

  const filtered =
    activeCategory === "all"
      ? insights
      : insights.filter((a) => a.category === activeCategory);

  const featuredArticle = filtered.find((a) => a.featured);
  const regularArticles = filtered.filter((a) => !a.featured);

  async function handlePublish(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");

    if (!user) {
      setFormError(c.loginRequired);
      return;
    }

    const form = new FormData(e.currentTarget);
    const title = (form.get("title") as string).trim();
    const summary = (form.get("summary") as string).trim();
    const category = form.get("category") as string;
    const quote = (form.get("quote") as string).trim();

    if (!title || !summary || !category) {
      setFormError(lang === "ko" ? "필수 항목을 입력해주세요." : "Please fill required fields.");
      return;
    }
    if (summary.length < 20) {
      setFormError(c.summaryMin);
      return;
    }

    setSubmitting(true);

    const gradient = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
    const authorName = user.email?.split("@")[0] ?? "User";
    const authorInitial = authorName.charAt(0).toUpperCase();
    const tagLabel = CATEGORY_TAGS[lang][category] ?? category;

    const { error } = await supabase.from("insights").insert({
      user_id: user.id,
      author_name: authorName,
      author_initial: authorInitial,
      title,
      summary,
      category,
      tags: [tagLabel],
      quote: quote || null,
      gradient,
      lang,
    });

    setSubmitting(false);

    if (error) {
      setFormError(error.message);
      return;
    }

    setShowModal(false);
    fetchInsights();
  }

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  }

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
      <button
        onClick={() => {
          if (!user) {
            alert(c.loginRequired);
            return;
          }
          setShowModal(true);
        }}
        className="mb-8 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        {c.newInsight}
      </button>

      {/* Loading skeleton */}
      {loading && (
        <div className="py-8 space-y-6">
          <div className="rounded-xl bg-gray-100 h-48 animate-pulse" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl bg-gray-100 h-40 animate-pulse" />
            ))}
          </div>
        </div>
      )}

      {/* Featured Article */}
      {!loading && featuredArticle && (
        <div className="mb-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div
              className={`md:w-1/2 h-64 md:h-auto bg-gradient-to-br ${featuredArticle.gradient} relative flex items-end p-6`}
            >
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                {c.featured}
              </span>
              <div className="w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  {featuredArticle.author_initial}
                </span>
              </div>
            </div>
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
                    {featuredArticle.author_initial}
                  </span>
                  <span className="text-sm text-gray-700">{featuredArticle.author_name}</span>
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
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div
                className={`h-48 bg-gradient-to-br ${article.gradient} relative flex items-center justify-center p-6`}
              >
                <span className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded">
                  {article.tags[0]}
                </span>

                {article.quote ? (
                  <div className="text-white/90 text-center px-4">
                    <span className="text-2xl leading-none">&ldquo;</span>
                    <p className="text-xs leading-relaxed mt-1">{article.quote}</p>
                    <span className="text-2xl leading-none">&rdquo;</span>
                    <p className="text-[10px] text-white/60 mt-2">
                      {article.author_name}
                    </p>
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {article.author_initial}
                    </span>
                  </div>
                )}
              </div>

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
                      {article.author_initial}
                    </span>
                    <span className="text-xs text-gray-600">{article.author_name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{formatDate(article.created_at)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Write Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{c.modalTitle}</h2>

            <form onSubmit={handlePublish} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {c.fieldTitle} *
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {c.fieldSummary} *
                </label>
                <textarea
                  name="summary"
                  rows={3}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {c.fieldCategory} *
                </label>
                <select
                  name="category"
                  required
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                >
                  <option value="" disabled>--</option>
                  {(Object.entries(CATEGORIES[lang]) as [Category, string][])
                    .filter(([k]) => k !== "all")
                    .map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {c.fieldQuote}
                </label>
                <input
                  name="quote"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
                />
              </div>

              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {formError}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {c.cancel}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {submitting ? c.publishing : c.publish}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
