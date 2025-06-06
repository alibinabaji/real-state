"use client";

import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 p-2">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 space-x-reverse"
              aria-label="صفحه اصلی"
            >
              <span className="text-xl font-bold text-[#2cc49b]">مربع</span>
            </button>
          </div>

          <nav className="hidden md:flex jstify-between gap-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-[#2cc49b] transition"
            >
              چگونه کار می‌کند؟
            </button>
            <button
              onClick={() => scrollToSection("opportunities")}
              className="text-gray-700 hover:text-[#2cc49b] transition"
            >
              فرصت‌های سرمایه‌گذاری
            </button>
            <button
              onClick={() => scrollToSection("profit-projection")}
              className="text-gray-700 hover:text-[#2cc49b] transition"
            >
              سود تخمینی
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-gray-700 hover:text-[#2cc49b] transition"
            >
              چرا ما؟
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-[#2cc49b] rounded-lg hover:text-[#2cc49b] transition duration-200">
              ورود
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-[#2cc49b] rounded-lg hover:bg-[#26a683] focus:outline-none focus:ring-2 focus:ring-[#2cc49b] focus:ring-opacity-50 transition duration-200 shadow-md hover:shadow-lg">
              ثبت نام
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#2cc49b]"
            >
              چگونه کار می‌کند؟
            </button>
            <button
              onClick={() => scrollToSection("opportunities")}
              className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#2cc49b]"
            >
              فرصت‌های سرمایه‌گذاری
            </button>
            <button
              onClick={() => scrollToSection("profit-projection")}
              className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#2cc49b]"
            >
              سود تخمینی
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#2cc49b]"
            >
              چرا ما؟
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
