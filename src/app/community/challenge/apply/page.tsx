"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

type Track = "actuator_sensor" | "ai_control" | "system_integration";

export default function ApplyPage() {
  const { lang } = useLang();
  const { user } = useAuth();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const t = {
    ko: {
      title: "Startup Cup 참가 신청",
      subtitle: "K-ROBOTICS STARTUP CUP 2026에 참가 신청합니다.",
      teamName: "팀명",
      leaderName: "대표자 이름",
      leaderEmail: "대표자 이메일",
      leaderPhone: "대표자 연락처",
      organization: "소속 기관",
      teamSize: "팀원 수",
      track: "참가 트랙",
      tracks: {
        actuator_sensor: "Track A: 구동기/센서",
        ai_control: "Track B: AI/제어",
        system_integration: "Track C: 시스템 통합",
      } as Record<Track, string>,
      projectTitle: "프로젝트 제목",
      description: "프로젝트 설명",
      descPlaceholder: "프로젝트의 핵심 아이디어와 목표를 설명해주세요 (최소 50자)",
      motivation: "참가 동기 (선택)",
      motivationPlaceholder: "이 대회에 참가하게 된 동기를 알려주세요",
      submit: "신청하기",
      submitting: "제출 중...",
      required: "필수 항목을 모두 입력해주세요.",
      descMin: "프로젝트 설명은 최소 50자 이상이어야 합니다.",
    },
    en: {
      title: "Startup Cup Application",
      subtitle: "Apply for K-ROBOTICS STARTUP CUP 2026.",
      teamName: "Team Name",
      leaderName: "Leader Name",
      leaderEmail: "Leader Email",
      leaderPhone: "Leader Phone",
      organization: "Organization",
      teamSize: "Team Size",
      track: "Track",
      tracks: {
        actuator_sensor: "Track A: Actuators/Sensors",
        ai_control: "Track B: AI/Control",
        system_integration: "Track C: System Integration",
      } as Record<Track, string>,
      projectTitle: "Project Title",
      description: "Project Description",
      descPlaceholder: "Describe your project's core idea and goals (min 50 chars)",
      motivation: "Motivation (Optional)",
      motivationPlaceholder: "Tell us why you want to participate",
      submit: "Submit Application",
      submitting: "Submitting...",
      required: "Please fill in all required fields.",
      descMin: "Project description must be at least 50 characters.",
    },
  };

  const c = t[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const teamName = (form.get("teamName") as string).trim();
    const leaderName = (form.get("leaderName") as string).trim();
    const leaderEmail = (form.get("leaderEmail") as string).trim();
    const leaderPhone = (form.get("leaderPhone") as string).trim();
    const organization = (form.get("organization") as string).trim();
    const teamSize = parseInt(form.get("teamSize") as string, 10);
    const track = form.get("track") as string;
    const title = (form.get("projectTitle") as string).trim();
    const description = (form.get("description") as string).trim();
    const motivation = (form.get("motivation") as string).trim();

    if (!teamName || !leaderName || !leaderEmail || !organization || !track || !title || !description) {
      setError(c.required);
      return;
    }
    if (description.length < 50) {
      setError(c.descMin);
      return;
    }

    setSubmitting(true);

    const { error: dbError } = await supabase.from("applications").insert({
      user_id: user?.id ?? null,
      team_name: teamName,
      leader_name: leaderName,
      leader_email: leaderEmail,
      leader_phone: leaderPhone || null,
      organization,
      team_size: teamSize || 1,
      track,
      title,
      description,
      motivation: motivation || null,
    });

    setSubmitting(false);

    if (dbError) {
      setError(dbError.message);
      return;
    }

    router.push("/community/challenge/apply/complete");
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{c.title}</h1>
      <p className="text-gray-500 mb-8">{c.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Team Name */}
        <div>
          <label className={labelClass}>{c.teamName} *</label>
          <input name="teamName" type="text" className={inputClass} required />
        </div>

        {/* Leader Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{c.leaderName} *</label>
            <input name="leaderName" type="text" className={inputClass} required />
          </div>
          <div>
            <label className={labelClass}>{c.leaderEmail} *</label>
            <input name="leaderEmail" type="email" className={inputClass} required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{c.leaderPhone}</label>
            <input name="leaderPhone" type="tel" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{c.organization} *</label>
            <input name="organization" type="text" className={inputClass} required />
          </div>
        </div>

        {/* Team Size & Track */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{c.teamSize}</label>
            <input name="teamSize" type="number" min="1" max="10" defaultValue="1" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{c.track} *</label>
            <select name="track" className={inputClass} required defaultValue="">
              <option value="" disabled>
                --
              </option>
              {(Object.entries(c.tracks) as [Track, string][]).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project */}
        <div>
          <label className={labelClass}>{c.projectTitle} *</label>
          <input name="projectTitle" type="text" className={inputClass} required />
        </div>

        <div>
          <label className={labelClass}>{c.description} *</label>
          <textarea
            name="description"
            rows={5}
            className={inputClass}
            placeholder={c.descPlaceholder}
            required
          />
        </div>

        <div>
          <label className={labelClass}>{c.motivation}</label>
          <textarea
            name="motivation"
            rows={3}
            className={inputClass}
            placeholder={c.motivationPlaceholder}
          />
        </div>

        {/* Error */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? c.submitting : c.submit}
        </button>
      </form>
    </div>
  );
}
