import { FaUser, FaMap, FaCreditCard, FaFileContract } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      title: "ثبت‌نام و احراز هویت",
      description: "اولین قدم ثبت‌نام و تکمیل اطلاعات هویتی شماست.",
      icon: <FaUser className="w-5 h-5 text-white" />,
    },
    {
      title: "انتخاب ملک و مساحت",
      description:
        "ملک دلخواه خود را انتخاب و به اندازه نیاز سرمایه‌گذاری کنید.",
      icon: <FaMap className="w-5 h-5 text-white" />,
    },
    {
      title: "پرداخت امن",
      description: "سرمایه‌گذاری شما از طریق درگاه بانکی معتبر انجام می‌شود.",
      icon: <FaCreditCard className="w-5 h-5 text-white" />,
    },
    {
      title: "دریافت سند مالکیت",
      description: "سند دیجیتال شما صادر و در سامانه دولتی ثبت می‌گردد.",
      icon: <FaFileContract className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          مسیر مالکیت هوشمند
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          در ۴ گام ساده به جمع مالکین بپیوندید
        </p>

        <div className="relative hidden md:block">
          <svg
            className="hidden md:block absolute w-full h-20 top-1/2 left-0 transform -translate-y-1/2"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 50 C 250 100, 750 0, 1000 50"
              fill="none"
              stroke="#2cc49b"
              strokeWidth="2"
              strokeDasharray="8,6"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="relative w-16 h-16 flex items-center justify-center bg-[#2cc49b] rounded-full mb-4 shadow-lg mx-auto">
                  <span className="absolute -top-2 -right-2 bg-white text-[#2cc49b] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#2cc49b] text-xs">
                    {index + 1}
                  </span>
                  <div className="text-white">{step.icon}</div>
                </div>

                <div
                  className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-64 mx-auto ${
                    index % 2 === 0 ? "md:mt-8" : "md:mb-8"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-8 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-[#2cc49b] rounded-full shadow">
                  <span className="absolute -top-1 -right-1 bg-white text-[#2cc49b] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-[#2cc49b] text-xs">
                    {index + 1}
                  </span>
                  <div className="text-white text-sm">{step.icon}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full h-8 w-0.5 bg-[#2cc49b] mx-auto mt-2 transform -translate-x-1/2"></div>
                )}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                <h3 className="font-medium text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
