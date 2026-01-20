"use client";

import { useState } from "react";
import {
  FileText,
  Users,
  Database,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    title: "Problem Discovery",
    icon: FileText,
    description:
      "Lexbolt began by closely studying how automotive teams interpret complex regulations. We observed that most effort was spent manually reading, cross-referencing, and translating standards into internal engineering language.",
    insight: "Regulatory complexity was not the issue — lack of structure was.",
  },
  {
    title: "Workshops & Validation",
    icon: Users,
    description:
      "Through workshops with OEMs and Tier-1 suppliers, Lexbolt validated real-world compliance challenges.",
    insight: "Validation must happen with practitioners.",
  },
  {
    title: "Structured Intelligence",
    icon: Database,
    description:
      "Regulatory requirements were transformed into structured, machine-readable intelligence.",
    insight: "Structure enables automation.",
  },
  {
    title: "Platformization",
    icon: LayoutGrid,
    description:
      "Capabilities were unified into a single scalable compliance platform.",
    insight: "Platforms accelerate adoption.",
  },
  {
    title: "Operational Adoption",
    icon: ShieldCheck,
    description:
      "Compliance became embedded into daily engineering workflows.",
    insight: "Adoption defines success.",
  },
];

export default function OurJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-2 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Journey</h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          How Lexbolt evolved from early regulatory workshops to a
          production-grade compliance platform.
        </p>
      </div>

      {/* Steps */}
      <div
        className="
          flex gap-10 md:gap-0
          md:grid md:grid-cols-5
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          pb-6
        "
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = active === index;

          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="
                flex flex-col items-center
                min-w-[140px] md:min-w-0
                snap-center cursor-pointer
              "
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition
                  ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-400"
                  }
                `}
              >
                <Icon className="w-6 h-6" />
              </div>

              <p
                className={`mt-3 text-sm font-medium text-center
                  ${
                    isActive ? "text-black" : "text-gray-400"
                  }
                `}
              >
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Content Card */}
      <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Text */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Understanding the Compliance Bottleneck
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {steps[active].description}
            </p>
          </div>

          {/* Insight */}
          <div className="border-l-4 border-orange-500 pl-6 bg-orange-50/40 rounded-xl p-6">
            <p className="text-xs font-semibold text-orange-600 mb-2">
              KEY INSIGHT
            </p>
            <p className="text-gray-800 font-medium">
              {steps[active].insight}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Step {active + 1} of {steps.length}
          </p>

          <div className="flex gap-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all
                  ${
                    active === i
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-gray-300"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
