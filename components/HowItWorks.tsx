import { FaUser, FaMap, FaCreditCard, FaFileContract } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      title: "ثبت‌نام و احراز هویت",
      description: "اولین قدم ثبت‌نام و تکمیل اطلاعات هویتی شماست.",
      icon: <FaUser className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "انتخاب خانه و مساحت مورد نظر",
      description:
        "خانه دلخواه خود را پیدا کنید و فقط به مقدار مورد نظرتان سرمایه‌گذاری کنید.",
      icon: <FaMap className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "پرداخت امن از طریق درگاه بانکی",
      description:
        "سرمایه‌گذاری شما از طریق درگاه بانکی انجام می‌شود و کاملاً امن است.",
      icon: <FaCreditCard className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "دریافت سند دیجیتال مالکیت",
      description:
        "پس از خرید، سند دیجیتال مالکیت شما صادر می‌شود و تحت API دولتی ثبت می‌گردد.",
      icon: <FaFileContract className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-4 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          چگونه کار می‌کند؟
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          تنها چهار قدم ساده تا مالکیت خانه‌ی رویایی‌تان!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
