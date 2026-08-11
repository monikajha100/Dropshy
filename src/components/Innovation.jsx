import React from "react";
import {
  ArrowRight,
  Bot,
  MapPin,
  TrendingUp,
  Package,
  BarChart3,
} from "lucide-react";

const cards = [
  {
    title: "Sense",
    desc: `Our advanced AI-driven API refines field operations,
reduces Return to Origin (RTO) rates, improves delivery
accuracy with verified addresses and smart autofill
checkout. It enhances customer experience while reducing
cart abandonment.`,
  },
  {
    title: "Trends",
    desc: `Successful eCommerce businesses need deep insights
into market intelligence, customer behaviour and
industry trends. Our AI platform delivers data that helps
brands take faster and smarter decisions.`,
  },
];

export default function AIInnovations() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-24">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <span className="uppercase tracking-[5px] text-lime-400 font-semibold">
          AI Powered
        </span>

        <h2 className="text-white text-6xl font-bold mt-5 leading-tight">
          AI Innovations
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          Smart AI solutions that automate operations,
          improve delivery quality and help ecommerce
          brands grow faster.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {cards.map((card, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-[34px]
              bg-[#1b1b1b]
              border border-white/10
              hover:border-lime-400/30
              duration-500
              hover:-translate-y-2
              min-h-[520px]"
            >

              <div className="grid grid-cols-2 h-full">

                {/* LEFT */}

                <div className="p-10 flex flex-col justify-center">

                  <h3 className="text-white text-5xl font-bold">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 leading-9 mt-7">
                    {card.desc}
                  </p>

                  <button className="flex items-center gap-3 mt-8 text-white hover:text-lime-400 duration-300">

                    Know more

                    <ArrowRight size={22} />

                  </button>

                </div>

                {/* RIGHT */}

                <div className="relative">

                {index === 0 ? (

<div className="relative w-full h-full flex items-center justify-center">

  {/* Glow */}
  <div className="absolute w-72 h-72 rounded-full bg-indigo-500/20 blur-[90px]"></div>

  {/* Left Card */}
  <div className="absolute left-0 top-28 rotate-[-15deg] transition-all duration-500 group-hover:-translate-x-3 group-hover:-rotate-[20deg]">

    <div className="bg-white rounded-[26px] p-3 w-36 shadow-[0_30px_60px_rgba(0,0,0,.35)]">

      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
        alt=""
        className="h-24 w-full rounded-2xl object-cover"
      />

      <div className="mt-3">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          Product
        </p>

        <h4 className="font-semibold text-sm">
          Sneakers
        </h4>

      </div>

    </div>

  </div>

  {/* Main Address Card */}

  <div className="relative z-20 bg-white rounded-[30px] p-5 w-56 shadow-[0_40px_80px_rgba(0,0,0,.45)] transition-all duration-500 group-hover:-translate-y-3">

    <div className="rounded-2xl overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
        alt=""
        className="h-36 w-full object-cover"
      />

    </div>

    <div className="mt-4">

      <div className="flex items-center gap-2 text-gray-400 text-[11px] uppercase">

        <MapPin size={13} />

        Verified Address

      </div>

      <h3 className="font-bold mt-2">
        New Delhi 110030
      </h3>

      <div className="inline-flex mt-4 rounded-full bg-red-100 text-red-600 px-3 py-1 text-xs">

        Ambiguous Address

      </div>

    </div>

  </div>

  {/* Right Card */}

  <div className="absolute right-0 top-20 rotate-[16deg] transition-all duration-500 group-hover:translate-x-3 group-hover:rotate-[22deg]">

    <div className="bg-white rounded-[26px] p-3 w-36 shadow-[0_30px_60px_rgba(0,0,0,.35)]">

      <img
        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
        alt=""
        className="h-24 w-full rounded-2xl object-cover"
      />

      <div className="mt-3">

        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          Product
        </p>

        <h4 className="font-semibold text-sm">
          Fashion
        </h4>

      </div>

    </div>

  </div>

  {/* AI Bubble */}

  <div className="absolute right-6 top-10 z-30">

    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl text-white animate-bounce">

      <Bot size={28}/>

    </div>

  </div>

</div>

) : (

  // 👉 Part 3 yahan aayega

  <><div className="relative w-full h-full flex items-center justify-center">

  {/* Background Glow */}
  <div className="absolute w-80 h-80 rounded-full bg-purple-600/20 blur-[100px]"></div>

  {/* Main Dashboard */}
  <div className="relative z-20 bg-[#141414] border border-white/10 rounded-[28px] p-5 w-72 shadow-[0_40px_80px_rgba(0,0,0,.45)]">

    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-white font-bold text-lg">
          Market Trends
        </h4>
        <p className="text-gray-500 text-xs mt-1">
          AI Insights
        </p>
      </div>

      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
        <TrendingUp className="text-white" size={18}/>
      </div>
    </div>

    {/* Chart */}
    <div className="mt-6 bg-gradient-to-br from-[#6d5dfc] to-[#9d4edd] rounded-2xl h-40 p-5 flex items-end justify-between">

      <div className="w-4 h-16 rounded-full bg-white"></div>
      <div className="w-4 h-24 rounded-full bg-white/90"></div>
      <div className="w-4 h-12 rounded-full bg-white/70"></div>
      <div className="w-4 h-28 rounded-full bg-white"></div>
      <div className="w-4 h-20 rounded-full bg-white/80"></div>
      <div className="w-4 h-32 rounded-full bg-white"></div>

    </div>

    {/* Bottom Stats */}

    <div className="grid grid-cols-2 gap-3 mt-5">

      <div className="bg-[#232323] rounded-xl p-3">

        <p className="text-xs text-gray-500">
          Orders
        </p>

        <h3 className="text-white text-xl font-bold mt-2">
          12.8K
        </h3>

      </div>

      <div className="bg-[#232323] rounded-xl p-3">

        <p className="text-xs text-gray-500">
          Revenue
        </p>

        <h3 className="text-white text-xl font-bold mt-2">
          ₹8.5L
        </h3>

      </div>

    </div>

    <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-white font-semibold hover:scale-105 transition">
      Explore Trends
    </button>

  </div>

  {/* Floating Card - AOV */}
  <div className="absolute -top-4 right-0 bg-white rounded-2xl px-4 py-3 shadow-2xl">

    <p className="text-[11px] text-gray-500">
      Average Order
    </p>

    <h3 className="font-bold text-xl">
      ₹1652
    </h3>

    <span className="text-green-500 text-xs">
      +12%
    </span>

  </div>

  {/* Floating Card - Prepaid */}
  <div className="absolute -bottom-5 left-0 bg-white rounded-2xl px-4 py-3 shadow-2xl">

    <div className="flex items-center gap-2">

      <Package size={18}/>

      <div>

        <p className="text-[11px] text-gray-500">
          Prepaid
        </p>

        <h3 className="font-bold">
          58%
        </h3>

      </div>

    </div>

  </div>

  {/* Floating Card - Growth */}
  <div className="absolute top-28 -left-6 bg-white rounded-xl p-3 shadow-xl">

    <BarChart3 className="text-purple-600" size={20}/>

    <p className="text-xs mt-2 text-gray-500">
      Growth
    </p>

    <h4 className="font-bold text-green-600">
      +24%
    </h4>

  </div>

</div></>

)}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}