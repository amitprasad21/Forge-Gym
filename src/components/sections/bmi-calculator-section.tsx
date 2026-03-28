"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";

type Unit = "metric" | "imperial";

export default function BMICalculatorSection() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  function calculateBMI() {
    let h: number;
    const w = parseFloat(weight);

    if (unit === "metric") {
      h = parseFloat(height) / 100; // cm to m
      if (!h || !w || h <= 0 || w <= 0) return;
      setBmi(parseFloat((w / (h * h)).toFixed(1)));
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const totalInches = ft * 12 + inches;
      if (!totalInches || !w || totalInches <= 0 || w <= 0) return;
      setBmi(parseFloat(((703 * w) / (totalInches * totalInches)).toFixed(1)));
    }
  }

  function resetForm() {
    setHeight("");
    setWeight("");
    setHeightFt("");
    setHeightIn("");
    setBmi(null);
  }

  function getCategory(val: number) {
    if (val < 18.5) return { label: "Underweight", color: "text-blue-400", bar: "bg-blue-400", pct: 20 };
    if (val < 25) return { label: "Normal", color: "text-green-400", bar: "bg-green-400", pct: 50 };
    if (val < 30) return { label: "Overweight", color: "text-yellow-400", bar: "bg-yellow-400", pct: 75 };
    return { label: "Obese", color: "text-red-400", bar: "bg-red-400", pct: 95 };
  }

  const category = bmi ? getCategory(bmi) : null;

  return (
    <section className="section-padding bg-forge-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="KNOW YOUR BODY"
          title="BMI CALCULATOR"
          description="Calculate your Body Mass Index to understand where you stand and set the right fitness goals."
        />

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-forge-gray-900/60">
          {/* Unit Toggle */}
          <div className="flex border-b border-white/5">
            <button
              onClick={() => { setUnit("metric"); resetForm(); }}
              className={`flex-1 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                unit === "metric"
                  ? "bg-forge-red text-white"
                  : "text-forge-gray-400 hover:text-white"
              }`}
            >
              Metric (kg / cm)
            </button>
            <button
              onClick={() => { setUnit("imperial"); resetForm(); }}
              className={`flex-1 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                unit === "imperial"
                  ? "bg-forge-red text-white"
                  : "text-forge-gray-400 hover:text-white"
              }`}
            >
              Imperial (lbs / ft)
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Height */}
              {unit === "metric" ? (
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-forge-gray-400">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="170"
                    className="w-full rounded-lg border border-white/10 bg-forge-black px-4 py-3 text-white placeholder-forge-gray-600 outline-none transition-colors focus:border-forge-red"
                  />
                </div>
              ) : (
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-forge-gray-400">
                    Height
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      placeholder="5 ft"
                      className="w-full rounded-lg border border-white/10 bg-forge-black px-4 py-3 text-white placeholder-forge-gray-600 outline-none transition-colors focus:border-forge-red"
                    />
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      placeholder="7 in"
                      className="w-full rounded-lg border border-white/10 bg-forge-black px-4 py-3 text-white placeholder-forge-gray-600 outline-none transition-colors focus:border-forge-red"
                    />
                  </div>
                </div>
              )}

              {/* Weight */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-forge-gray-400">
                  Weight ({unit === "metric" ? "kg" : "lbs"})
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === "metric" ? "70" : "154"}
                  className="w-full rounded-lg border border-white/10 bg-forge-black px-4 py-3 text-white placeholder-forge-gray-600 outline-none transition-colors focus:border-forge-red"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={calculateBMI}
                className="flex-1 rounded-lg bg-forge-red py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-forge-red-light hover:shadow-lg hover:shadow-forge-red/20"
              >
                Calculate BMI
              </button>
              <button
                onClick={resetForm}
                className="rounded-lg border border-white/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-forge-gray-400 transition-colors hover:border-white/20 hover:text-white"
              >
                Reset
              </button>
            </div>

            {/* Result */}
            {bmi !== null && category && (
              <div className="mt-8 rounded-xl border border-white/5 bg-forge-black/60 p-6 animate-[fadeUp_0.4s_ease-out_forwards]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-forge-gray-400">Your BMI</p>
                    <p className="mt-1 text-3xl font-black text-white sm:text-4xl">{bmi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-forge-gray-400">Category</p>
                    <p className={`mt-1 text-xl font-bold ${category.color}`}>
                      {category.label}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-forge-gray-800">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${category.bar}`}
                      style={{ width: `${category.pct}%` }}
                    />
                  </div>
                  <div className="mt-2 hidden justify-between text-[10px] uppercase tracking-wider text-forge-gray-500 sm:flex">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>

                {/* Ranges */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
                  <div className={`rounded-md py-2 ${bmi < 18.5 ? "bg-blue-400/20 text-blue-400" : "bg-white/5 text-forge-gray-500"}`}>
                    &lt;18.5
                  </div>
                  <div className={`rounded-md py-2 ${bmi >= 18.5 && bmi < 25 ? "bg-green-400/20 text-green-400" : "bg-white/5 text-forge-gray-500"}`}>
                    18.5–24.9
                  </div>
                  <div className={`rounded-md py-2 ${bmi >= 25 && bmi < 30 ? "bg-yellow-400/20 text-yellow-400" : "bg-white/5 text-forge-gray-500"}`}>
                    25–29.9
                  </div>
                  <div className={`rounded-md py-2 ${bmi >= 30 ? "bg-red-400/20 text-red-400" : "bg-white/5 text-forge-gray-500"}`}>
                    30+
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
