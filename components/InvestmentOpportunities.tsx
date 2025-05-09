"use client";

import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function InvestmentOpportunities() {
  const projects = [
    {
      id: 1,
      title: "خانه مدرن در ونک",
      image: "/images/projects/project1.jpg",
      minInvest: "50,000,000 تومان",
      progress: 65,
      expectedReturn: "20%",
    },
    {
      id: 2,
      title: "آپارتمان لوکس در شهرک غرب",
      image: "/images/projects/project2.jpg",
      minInvest: "75,000,000 تومان",
      progress: 82,
      expectedReturn: "18%",
    },
    {
      id: 3,
      title: "ویلا دوبلکس در نیاوران",
      image: "/images/projects/project3.jpg",
      minInvest: "120,000,000 تومان",
      progress: 40,
      expectedReturn: "22%",
    },
    {
      id: 4,
      title: "واحد تجاری در میدان انقلاب",
      image: "/images/projects/project4.jpg",
      minInvest: "90,000,000 تومان",
      progress: 93,
      expectedReturn: "15%",
    },
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    mode: "free",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.5, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  return (
    <section className="py-4 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            فرصت‌های سرمایه‌گذاری
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            آخرین پروژه‌های موجود را مشاهده کنید و بهترین فرصت را برای
            سرمایه‌گذاری انتخاب کنید.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {projects.map((project) => (
            <div
              key={project.id}
              className="keen-slider__slide rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
                  {project.expectedReturn} سود انتظاری
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="mb-3">
                  <span className="text-sm text-gray-500">حداقل سرمایه:</span>
                  <p className="font-medium text-blue-600">
                    {project.minInvest}
                  </p>
                </div>

                <div className="mb-3">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-left">
                    {project.progress}% جمع‌آوری شده
                  </p>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="block w-full text-center py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition"
                >
                  سرمایه‌گذاری کنید
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
