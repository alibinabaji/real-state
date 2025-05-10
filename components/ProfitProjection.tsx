"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ProfitProjection() {
  const [investment, setInvestment] = useState<number>(50_000_000);

  const calculateReturn = (years: number) => {
    return investment * Math.pow(1 + 0.2, years);
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("fa-IR").format(value);

  const dataPoints = [
    { year: 1, value: calculateReturn(1) },
    { year: 2, value: calculateReturn(2) },
    { year: 3, value: calculateReturn(3) },
    { year: 4, value: calculateReturn(4) },
    { year: 5, value: calculateReturn(5) },
  ];

  const labels = dataPoints.map((d) => `${d.year} سال`);

  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "سرمایه + سود",
        data: dataPoints.map((d) => d.value),
        borderColor: "#2cc49b",
        backgroundColor: "rgba(29, 78, 216, 0.1)",
        pointBackgroundColor: "#2cc49b",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#2cc49b",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#1F2937",
          font: {
            family: '"Vazirmatn", sans-serif',
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${formatCurrency(Number(context.raw))} تومان`;
          },
        },
        backgroundColor: "#1F2937",
        titleFont: {
          family: '"Vazirmatn", sans-serif',
          size: 14,
        },
        bodyFont: {
          family: '"Vazirmatn", sans-serif',
          size: 14,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => formatCurrency(value as number),
          color: "#4B5563",
          font: {
            family: '"Vazirmatn", sans-serif',
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        ticks: {
          color: "#4B5563",
          font: {
            family: '"Vazirmatn", sans-serif',
            size: 14,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  return (
    <section className="py-4 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            سود شما در یک نگاه
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            با وارد کردن مبلغ سرمایه‌گذاری، سود تخمینی خود را در سال‌های آینده
            مشاهده کنید.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <label
            htmlFor="investment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            مبلغ سرمایه‌گذاری (تومان)
          </label>
          <input
            id="investment"
            type="number"
            min="1000000"
            step="1000000"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
          <div className="md:h-80">
            <Line
              className="m-auto max-w-full h-full"
              data={data}
              options={options}
            />
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
          <p>
            سود فوق بر اساس بازدهی متوسط سالانه <strong>20%</strong> محاسبه شده
            است و صرفاً جهت آشنایی اولیه است. عملکرد واقعی ممکن است متفاوت باشد.
          </p>
        </div>
      </div>
    </section>
  );
}
