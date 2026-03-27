"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { supabase } from "@/lib/supabase";

type Application = {
  id: string;
  created_at: string;
  team_name: string;
  leader_name: string;
  leader_email: string;
  organization: string;
  track: string;
  title: string;
  description: string;
  status: string;
};

const TRACK_LABELS: Record<string, Record<string, string>> = {
  actuator_sensor: { ko: "구동기/센서", en: "Actuators/Sensors" },
  ai_control: { ko: "AI/제어", en: "AI/Control" },
  system_integration: { ko: "시스템 통합", en: "System Integration" },
};

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-700",
  reviewing: "bg-blue-50 text-blue-700",
  accepted: "bg-green-50 text-green-700",
  rejected: "bg-red-50 text-red-700",
};

export default function AdminApplicationsPage() {
  const { lang } = useLang();
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Application | null>(null);

  const t = {
    ko: {
      title: "Startup Cup 신청 관리",
      subtitle: "K-ROBOTICS STARTUP CUP 2026 참가 신청 목록",
      team: "팀명",
      leader: "대표자",
      org: "소속",
      track: "트랙",
      project: "프로젝트",
      status: "상태",
      date: "신청일",
      noData: "아직 신청 내역이 없습니다.",
      close: "닫기",
      description: "프로젝트 설명",
      statusLabels: { pending: "대기", reviewing: "심사중", accepted: "승인", rejected: "반려" } as Record<string, string>,
    },
    en: {
      title: "Startup Cup Applications",
      subtitle: "K-ROBOTICS STARTUP CUP 2026 application list",
      team: "Team",
      leader: "Leader",
      org: "Organization",
      track: "Track",
      project: "Project",
      status: "Status",
      date: "Date",
      noData: "No applications yet.",
      close: "Close",
      description: "Project Description",
      statusLabels: { pending: "Pending", reviewing: "Reviewing", accepted: "Accepted", rejected: "Rejected" } as Record<string, string>,
    },
  };

  const c = t[lang];

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });
      setApps((data as Application[]) || []);
      setLoading(false);
    }
    load();
  }, []);

  async function updateStatus(id: string, newStatus: string) {
    await supabase.from("applications").update({ status: newStatus }).eq("id", id);
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a)));
    if (selected?.id === id) setSelected({ ...selected, status: newStatus });
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{c.title}</h1>
      <p className="text-lg text-gray-500 mb-8">{c.subtitle}</p>

      {loading ? (
        <p className="text-gray-400 py-12 text-center">Loading...</p>
      ) : apps.length === 0 ? (
        <p className="text-gray-400 py-12 text-center">{c.noData}</p>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.team}</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.leader}</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.track}</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.project}</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.status}</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">{c.date}</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => setSelected(app)}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{app.team_name}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {app.leader_name}
                    <span className="text-xs text-gray-400 block">{app.leader_email}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded">
                      {TRACK_LABELS[app.track]?.[lang] || app.track}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700 max-w-[200px] truncate">{app.title}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded font-medium ${STATUS_STYLES[app.status] || ""}`}>
                      {c.statusLabels[app.status] || app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs">
                    {new Date(app.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{selected.team_name}</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-lg">
                &#10005;
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">{c.leader}:</span>{" "}
                <span className="text-gray-900">{selected.leader_name} ({selected.leader_email})</span>
              </div>
              <div>
                <span className="text-gray-500">{c.org}:</span>{" "}
                <span className="text-gray-900">{selected.organization}</span>
              </div>
              <div>
                <span className="text-gray-500">{c.track}:</span>{" "}
                <span className="text-gray-900">{TRACK_LABELS[selected.track]?.[lang] || selected.track}</span>
              </div>
              <div>
                <span className="text-gray-500">{c.project}:</span>{" "}
                <span className="text-gray-900">{selected.title}</span>
              </div>
              <div>
                <p className="text-gray-500 mb-1">{c.description}:</p>
                <p className="text-gray-700 bg-gray-50 rounded-lg p-3">{selected.description}</p>
              </div>
            </div>

            {/* Status Actions */}
            <div className="mt-6 flex gap-2 flex-wrap">
              {["pending", "reviewing", "accepted", "rejected"].map((s) => (
                <button
                  key={s}
                  onClick={() => updateStatus(selected.id, s)}
                  disabled={selected.status === s}
                  className={`px-4 py-2 text-xs rounded-lg font-medium transition-colors ${
                    selected.status === s
                      ? "bg-gray-200 text-gray-500 cursor-default"
                      : `${STATUS_STYLES[s]} hover:opacity-80`
                  }`}
                >
                  {c.statusLabels[s]}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 w-full py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg"
            >
              {c.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
