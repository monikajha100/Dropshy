import React from "react";
import "./DevelopDirection.css";

import {
  Boxes,
  BookOpen,
  Webhook,
  ArrowRight,
} from "lucide-react";

const data = [
  {
    icon: <Boxes size={36} strokeWidth={1.8} />,
    title: "Integrations",
    desc: "Discover a wide range of SDKs, plugins, and server integration options.",
  },
  {
    icon: <BookOpen size={36} strokeWidth={1.8} />,
    title: "API Reference",
    desc: "In-depth resources to help you create seamless and powerful solutions.",
  },
  {
    icon: <Webhook size={36} strokeWidth={1.8} />,
    title: "Webhooks",
    desc: "Stay updated with real-time alerts for all activities and events.",
  },
];

export default function DevelopersSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-28">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-lime-500/5 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 dev-heading">

          <span className="text-lime-400 uppercase tracking-[4px] font-semibold">
            Developers
          </span>

          <h2 className="mt-4 text-6xl font-bold leading-tight text-white">
            Engineered for
            <br />
            <span className="text-lime-400">
              Developers
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            Our advanced integrations consolidate business operations,
            making them smoother, faster and more efficient.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">

          {data.map((item, i) => (

            <div
              key={i}
              className="group rounded-3xl border border-white/10 bg-[#181818] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/50 hover:bg-[#1f1f1f]"
            >

              {/* Icon */}

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mb-5 text-4xl font-bold text-white transition group-hover:text-lime-400">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mb-10 text-lg leading-9 text-gray-400">

                {item.desc}

              </p>

              {/* Button */}

              <button className="dev-btn">
  Access Documentation

  <ArrowRight
    size={22}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}