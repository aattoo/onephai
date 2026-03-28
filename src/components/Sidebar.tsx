"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

type NavChild = { href: string; label: { ko: string; en: string } };
type NavItem =
  | { href: string; label: { ko: string; en: string }; icon: string; children?: never }
  | { href?: never; label: { ko: string; en: string }; icon: string; children: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: { ko: "Home", en: "Home" }, icon: "H" },
  {
    label: { ko: "PHYSICAL AI", en: "PHYSICAL AI" },
    icon: "Ph",
    children: [
      { href: "/intro/overview", label: { ko: "Overview", en: "Overview" } },
      { href: "/intro/structure", label: { ko: "Platform Structure", en: "Platform Structure" } },
      { href: "/intro/insight", label: { ko: "Insight", en: "Insight" } },
    ],
  },
  {
    label: { ko: "Community", en: "Community" },
    icon: "Co",
    children: [
      { href: "/community/challenge", label: { ko: "Startup Challenge", en: "Startup Challenge" } },
      { href: "/community/story", label: { ko: "Story", en: "Story" } },
      { href: "/community/trends", label: { ko: "Trends", en: "Trends" } },
      { href: "/community/notice", label: { ko: "Notice & FAQ", en: "Notice & FAQ" } },
    ],
  },
  {
    label: { ko: "Academy", en: "Academy" },
    icon: "Ac",
    children: [
      { href: "/academy/phai-academy", label: { ko: "PhAI Academy", en: "PhAI Academy" } },
      { href: "/academy/tutorials", label: { ko: "Tutorials", en: "Tutorials" } },
    ],
  },
  {
    label: { ko: "KITS", en: "KITS" },
    icon: "Ki",
    children: [
      { href: "/kits/actuation", label: { ko: "Actuation Modules", en: "Actuation Modules" } },
      { href: "/kits/sensor", label: { ko: "Sensor Modules", en: "Sensor Modules" } },
      { href: "/kits/wearable", label: { ko: "Wearable Robots", en: "Wearable Robots" } },
      { href: "/kits/manipulators", label: { ko: "Manipulators", en: "Manipulators" } },
      { href: "/kits/humanoid", label: { ko: "Humanoid Robots", en: "Humanoid Robots" } },
    ],
  },
  {
    label: { ko: "Studio", en: "Studio" },
    icon: "St",
    children: [
      { href: "/studio", label: { ko: "PhAI Studio", en: "PhAI Studio" } },
    ],
  },
  {
    label: { ko: "Admin", en: "Admin" },
    icon: "Ad",
    children: [
      { href: "/admin/applications", label: { ko: "신청 관리", en: "Applications" } },
      { href: "/admin/content", label: { ko: "콘텐츠 관리", en: "Content Management" } },
      { href: "/admin/users", label: { ko: "사용자 승인", en: "User Approval" } },
      { href: "/admin/logs", label: { ko: "활동 로그", en: "Activity Logs" } },
      { href: "/admin/inquiries", label: { ko: "문의 관리", en: "Inquiry Management" } },
      { href: "/admin/categories", label: { ko: "Story 카테고리", en: "Story Categories" } },
      { href: "/admin/settings", label: { ko: "사이트 설정", en: "Site Settings" } },
    ],
  },
  { href: "/contact", label: { ko: "Contact Us", en: "Contact Us" }, icon: "Ct" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lang } = useLang();
  const { user } = useAuth();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 flex flex-col ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <Link href="/" className="text-lg font-bold tracking-tight">
            ONE Ph<span className="text-blue-400">AI</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 text-gray-400"
        >
          {collapsed ? "▶" : "◀"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {NAV_ITEMS.filter((item) => {
          if (item.label.en === "Admin" && !user) return false;
          return true;
        }).map((item) => {
          const labelText = item.label[lang];
          const key = item.label.en;

          if (item.children) {
            const isOpen = openMenus[key];
            const isActive = item.children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));

            return (
              <div key={key}>
                <button
                  onClick={() => toggleMenu(key)}
                  className={`flex items-center w-full px-4 py-2.5 text-sm hover:bg-gray-800 transition-colors ${
                    isActive ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  <span className="w-6 h-6 flex items-center justify-center text-[11px] font-mono font-bold rounded bg-gray-700/50 text-gray-400 shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="ml-3 flex-1 text-left">{labelText}</span>
                      <span className="text-xs">{isOpen ? "▾" : "▸"}</span>
                    </>
                  )}
                </button>
                {isOpen && !collapsed && (
                  <div className="ml-9 border-l border-gray-700">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === child.href
                            ? "text-blue-400 bg-gray-800"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2.5 text-sm transition-colors ${
                pathname === item.href
                  ? "text-blue-400 bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              <span className="w-6 h-6 flex items-center justify-center text-[11px] font-mono font-bold rounded bg-gray-700/50 text-gray-400 shrink-0">{item.icon}</span>
              {!collapsed && <span className="ml-3">{labelText}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
