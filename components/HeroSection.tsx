"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [prefix, setPrefix] = useState("");
  const [highlighted, setHighlighted] = useState("");
  const [suffix, setSuffix] = useState("");

  const prefixText = "با سرمایه‌گذاری در محدوده پول خود، مثلاً یک ";
  const highlightedText = "متر مربع";
  const suffixText = " از خانه‌ای که دوست دارید را بخرید.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < prefixText.length) {
        setPrefix(prefixText.substring(0, index + 1));
        index++;
      } else if (index < prefixText.length + highlightedText.length) {
        setHighlighted(
          highlightedText.substring(0, index - prefixText.length + 1)
        );
        index++;
      } else if (
        index <
        prefixText.length + highlightedText.length + suffixText.length
      ) {
        setSuffix(
          suffixText.substring(
            0,
            index - prefixText.length - highlightedText.length + 1
          )
        );
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#2cc49b] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-right space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in-down">
              همین امروز شروع کنید، صاحب خانه شوید!
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-medium animate-fade-in">
              {prefix}
              <span className="font-extrabold text-yellow-400 text-[30px]">
                {highlighted}
              </span>
              {suffix}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={() => scrollToSection("opportunities")}
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition"
              >
                مشاهده فرصت‌ها
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition"
              >
                درباره ما
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/images/hero-image.gif"
                alt="خانه مدرن"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
        <a href="#how-it-works" className="animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
