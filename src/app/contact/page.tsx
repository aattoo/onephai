"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { lang } = useLang();

  const t = {
    ko: {
      title: "Contact Us",
      subtitle: "ONE PhAI에 대해 궁금한 점이 있으시면 언제든 연락해주세요.",
      name: "이름",
      email: "이메일",
      org: "소속",
      message: "메시지",
      send: "보내기",
      info: "연락처 정보",
      address: "대전광역시 유성구 대학로 291, KAIST",
    },
    en: {
      title: "Contact Us",
      subtitle: "Feel free to reach out if you have any questions about ONE PhAI.",
      name: "Name",
      email: "Email",
      org: "Organization",
      message: "Message",
      send: "Send",
      info: "Contact Information",
      address: "291 Daehak-ro, Yuseong-gu, Daejeon, KAIST",
    },
  };

  const c = t[lang];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{c.title}</h1>
      <p className="text-lg text-gray-500 mb-12">{c.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.name}</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.email}</label>
            <input
              type="email"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.org}</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{c.message}</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            {c.send}
          </button>
        </form>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 h-fit">
          <h3 className="font-bold text-gray-900 mb-4">{c.info}</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>contact@onephai.com</p>
            <p>{c.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
