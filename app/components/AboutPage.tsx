"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

interface AboutPageProps {
  readonly onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  // Add state for the image modal
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="fixed inset-0 z-[100] bg-[#070c17] overflow-y-auto">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(56,189,248,0.4); }
          50% { box-shadow: 0 0 40px rgba(56,189,248,0.8); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        .delay-6 { animation-delay: 0.6s; opacity: 0; }
        .glass-card {
          background: rgba(18, 25, 40, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .hover-lift {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f1a2a] to-[#1a2639]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(56,189,248,0.08),transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(99,102,241,0.05),transparent_70%)]" />

      {/* Sticky header - more minimal */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 glass-card border-b border-white/[0.03]">
        <div className="flex items-center gap-4">
          {/* LOGO - clickable with modern styling */}
          <button
            onClick={() =>
              setSelectedImage({ src: "/alab.png", alt: "Alab FC Logo" })
            }
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-600/20 border border-white/15 overflow-hidden relative cursor-pointer group focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300 hover:scale-105 hover:border-white/30"
          >
            <Image
              src="/alab.png"
              alt="Alab FC Logo"
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
            />
          </button>
          <div>
            <p className="text-white/40 text-xs tracking-wider font-light">
              EST. 2015 · LOS BAÑOS, LAGUNA
            </p>
            <p className="text-white font-bold text-xl tracking-wide">ALAB FC</p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white transition-all duration-200 text-sm font-medium backdrop-blur-sm flex items-center gap-2 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </button>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* HERO SECTION - enhanced dramatic layout */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-up delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium tracking-wide mb-8 backdrop-blur-sm hover:border-sky-400/50 transition-all">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span> ABOUT US
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight">
              ALAB<span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 text-5xl md:text-6xl mt-2 font-black">FOOTBALL CLUB</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 font-light">
              <span className="text-white font-semibold">ALAB FOOTBALL CLUB</span>
              {" or "}
              <span className="text-sky-300 font-medium">"ALAB FC"</span>
              {" is a dynamic football community based in "}
              <span className="text-sky-400 font-semibold">Los Baños, Laguna</span>, dedicated to developing excellence in youth sports and character.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                <span className="text-white/70 text-sm">Est. 2015</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="text-white/70 text-sm">AFC Licensed</span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE - enhanced with glow effect */}
          <button
            onClick={() =>
              setSelectedImage({ src: "/alab3.jpg", alt: "ALAB FC Team" })
            }
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl cursor-pointer group focus:outline-none focus:ring-4 focus:ring-sky-500/50 animate-up delay-2 hover-lift animate-float"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent pointer-events-none z-10 rounded-3xl group-hover:from-sky-500/40 transition-all duration-300"></div>
            <Image
              src="/alab3.jpg"
              alt="ALAB FC Team"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-white/90 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="text-white text-sm font-semibold">Click to enlarge</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 group-hover:bg-sky-500/50 transition-all">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </button>
        </section>

        {/* BRIEF HISTORY - enhanced layout */}
        <section className="mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium tracking-wide mb-12 animate-up delay-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span> OUR JOURNEY
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-up delay-3">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">Brief</span>
                <br />
                History
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed">
                <p className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-6 rounded-2xl border border-orange-500/30 backdrop-blur-sm hover-lift hover:border-orange-400/50 transition-all duration-300">
                  <span className="text-blue-300 font-bold block text-sm mb-2 uppercase tracking-widest">October 30, 2015</span>
                  <span className="text-white font-light">Alab FC was formed by a group of passionate parents united by one vision: to develop competent football players and coaches who embody excellence and integrity.</span>
                </p>
                <p className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 p-6 rounded-2xl border border-sky-500/30 backdrop-blur-sm hover-lift hover:border-sky-400/50 transition-all duration-300">
                  <span className="text-orange-400 font-semibold text-xl block mb-2">"Alab"</span>
                  <span className="text-white font-light">means <span className="text-orange-300 font-semibold">burning passion</span> — the eternal fire that drives every member of our club to excellence and achievement.</span>
                </p>
                <p className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover-lift hover:border-emerald-400/50 transition-all duration-300">
                  <span className="text-white font-light">From a handful of dedicated players, ages 13-14, we've grown into a thriving family of football enthusiasts committed to building champions of character.</span>
                </p>
              </div>
            </div>

            {/* HISTORY IMAGE */}
            <button
              onClick={() =>
                setSelectedImage({ src: "/Referees Football Cup 2016.jpg", alt: "Alab FC History" })
              }
              className="relative aspect-square rounded-3xl overflow-hidden border border-orange-500/40 shadow-2xl cursor-pointer group order-1 lg:order-2 animate-up delay-2 hover-lift"
            >
              <Image
                src="/Referees Football Cup 2016.jpg"
                alt="Alab FC History"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:via-black/50 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white/90 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-white text-sm font-semibold tracking-wide">CLICK TO ENLARGE</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/90 text-xs bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 font-medium tracking-wide">Referees Cup 2016</span>
              </div>
            </button>
          </div>
        </section>

        {/* VISION & MISSION - modern cards */}
        <section className="grid md:grid-cols-2 gap-6 mb-32">
          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-emerald-500/5 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-500 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">VISION</h3>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              To be at the forefront of developing competent players, coaches
              and members of the organization, who exhibit the right values, to
              contribute to the enhancement of the Philippine football
              community and the society as a whole.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-amber-500/5 via-amber-500/5 to-transparent border border-amber-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">MISSION</h3>
            </div>
            <ul className="space-y-4 text-white/60 text-lg">
              <li className="flex gap-4">
                <span className="text-amber-400 font-bold text-xl mt-1">•</span>
                <span>
                  Develop members who are well-disciplined, committed and
                  exhibit the right values;
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-400 font-bold text-xl mt-1">•</span>
                <span>
                  Immerse players and coaches in developmental programs geared
                  towards excellence in football;
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-400 font-bold text-xl mt-1">•</span>
                <span>
                  Create memorable experiences and have fun in every game,
                  where life-long lessons are learned.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* REGISTRATION - minimal cards */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-indigo-400">OFFICIAL</span> REGISTRATION
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "📋", title: "SEC Registered", value: "CN201608872" },
              {
                icon: "🏛️",
                title: "Business Permit",
                value: "4460-005-2022",
              },
              {
                icon: "⚽",
                title: "LFA - PFF Member",
                value: "Laguna FA · Philippine FF",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300 hover-lift"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="text-white/40 text-sm font-medium tracking-wide mb-2">
                  {item.title}
                </p>
                <p className="text-white font-semibold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS - modern grid */}
        <section className="mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium tracking-wide mb-12 animate-up delay-3">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span> ACCOMPLISHMENTS
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-up delay-3 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">ACHIEVEMENTS</span> & AWARDS
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-3xl animate-up delay-3">A showcase of championships, international participations, and community initiatives that define our excellence.</p>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Championships */}
            <div className="glass-card rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🏆</span>
                <h3 className="text-2xl font-bold text-yellow-400">
                  CHAMPIONSHIPS
                </h3>
              </div>
              <div className="max-h-64 overflow-y-auto pr-3 space-y-2 text-white/60 text-sm custom-scrollbar">
                <p>
                  • Milo Football Tournament (May 5, 2019), Under 10
                </p>
                <p>
                  • Acquire-Rectors Cup (Mar. 23, 2019), Under 10
                </p>
                <p>
                  • Football Para sa Bayan (Feb. 24, 2019), Under 13
                </p>
                <p>
                  • Governor's Cup (July 28, 2018), Boys Under 18
                </p>
                <p>
                  • Milo Football Tournament (May 13, 2018), Players 13 and
                  Players 11
                </p>
                <p>
                  • Bayan ni Juan Football Festival (Sep. 02, 2017), Boys 17 &
                  Under
                </p>
                <p>
                  • Buhayani Football Festival (June 12, 2017), Boys 15 & Under
                  - MVP, Best Striker, Best GK
                </p>
                <p>
                  • 4th Ceres Negros –Umbro Football Cup (Mar. 26, 2017),
                  Women's Open Plate Match
                </p>
                <p>
                  • Adidas Cup (July 03, 2016), Boys Born 2002-2003 - MVP
                </p>
                <p>
                  • Referees Cup (March 13, 2016), Boys Under 14
                </p>
              </div>
            </div>

            {/* International */}
            <div className="glass-card rounded-2xl p-8 hover:border-sky-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌏</span>
                <h3 className="text-2xl font-bold text-sky-400">
                  INTERNATIONAL
                </h3>
              </div>
              <div className="space-y-3 text-white/60 text-sm mb-6">
                <p>
                  <span className="text-sky-400 font-medium">• Borneo Cup 2016:</span> 8
                  players for Azkals Foundation-Laos FC
                </p>
                <p className="ml-4">- Under 16: 4th Place (2 players)</p>
                <p className="ml-4">- Under 15: 3rd Place (1 player)</p>
                <p className="ml-4">
                  - Under 14: 3rd Place (4 players)
                </p>
                <p className="ml-4">- Under 13: (2 players)</p>
                <p>
                  <span className="text-sky-400 font-medium">
                    • Badung, Indonesia:
                  </span>{" "}
                  9 players for Apuesto Bueno United
                </p>
              </div>

              {/* Photo */}
              <button
                onClick={() =>
                  setSelectedImage({
                    src: "/alab1.jpg",
                    alt: "International Tournament",
                  })
                }
                className="relative w-full h-28 rounded-xl overflow-hidden border border-white/10 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all duration-300"
              >
                <Image
                  src="/alab1.jpg"
                  alt="International Tournament"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/90 text-xs bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    Click to enlarge
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* National & Laguna */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">
                NATIONAL TOURNAMENTS
              </h3>
              <div className="space-y-2 text-white/60 text-sm mb-6">
                <p>
                  • 5 players in Youth Football League 2019 (U17, U13, U11)
                </p>
                <p>• Participated in Pinas Cup 2017 and 2018</p>
                <p>• 4 players in Pinas Cup 2016 - 3rd Place U14</p>
              </div>

              <h3 className="text-xl font-bold text-emerald-400 mb-4">
                LAGUNA TEAM
              </h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>• 2 players selected to Laguna Team 2019</p>
                <p>• 1 player selected to Laguna Team 2017</p>
                <p>
                  • 4 players selected to Laguna Team 2017 for Festival of
                  Football
                </p>
              </div>
            </div>

            {/* Community Service */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">❤️</span>
                <h3 className="text-2xl font-bold text-rose-400">
                  COMMUNITY SERVICE
                </h3>
              </div>
              <p className="text-white/50 text-lg mb-3 italic font-light">
                "Football is for All"
              </p>
              <p className="text-white/60 text-sm mb-4">
                Since June 2018, supporting{" "}
                <span className="text-white font-semibold">9 football scholars</span>{" "}
                ages 7-15 from public schools in Laguna.
              </p>

              {/* Photo */}
              <button
                onClick={() =>
                  setSelectedImage({
                    src: "/alab3.jpg",
                    alt: "Community Service",
                  })
                }
                className="relative w-full h-28 rounded-xl overflow-hidden border border-white/10 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all duration-300"
              >
                <Image
                  src="/alab3.jpg"
                  alt="Community Service"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/90 text-xs bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    Click to enlarge
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* FREE CLINICS & TOURNAMENTS */}
        <section className="grid md:grid-cols-2 gap-6 mb-32">
          {/* Free Clinics */}
          <div className="group bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-400/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">⚕️</span> FREE FOOTBALL CLINICS
            </h3>
            <div className="space-y-2 text-white/60 text-sm mb-4">
              <p>
                • With Business Affairs Office-UPLB (Oct 2019): 40 players
              </p>
              <p>
                • With DMST-UPLB (July 2019): 150 players
              </p>
              <p>
                • With DHK-UPLB & Los Baños LGU (2017-2018): 125 players
              </p>
            </div>

            {/* Photo */}
            <button
              onClick={() =>
                setSelectedImage({
                  src: "/alab_clinics.jpg",
                  alt: "Football Clinic",
                })
              }
              className="relative w-full h-24 rounded-xl overflow-hidden border border-green-500/20 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300"
            >
              <Image
                src="/alab_clinics.jpg"
                alt="Football Clinic"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/90 text-xs bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Click to enlarge
                </span>
              </div>
            </button>
          </div>

          {/* Copa San Lazaro */}
          <div className="group bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🏅</span> COPA SAN LAZARO
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Organized the 1st, 2nd, 3rd, 4th, 5th and 6th{" "}
              <span className="text-purple-400 font-medium">COPA SAN LAZARO</span>{" "}
              in partnership with Manila Jockey Club, Inc. in Carmona, Cavite
            </p>

            {/* Photo */}
            <button
              onClick={() =>
                setSelectedImage({
                  src: "/Alab_Copa.jpg",
                  alt: "Copa San Lazaro",
                })
              }
              className="relative w-full h-24 rounded-xl overflow-hidden border border-purple-500/20 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
            >
              <Image
                src="/Alab_Copa.jpg"
                alt="Copa San Lazaro"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/90 text-xs bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Click to enlarge
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* STATS SUMMARY - modern redesign */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                TOURNAMENT
              </span>{" "}
              STATS
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Year-by-year breakdown of our tournament participation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2016",
                local: "14",
                national: "1",
                intl: "1",
                color: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30",
              },
              {
                year: "2017",
                local: "15",
                national: "1",
                intl: "-",
                color: "from-emerald-500/20 to-teal-500/20",
                border: "border-emerald-500/30",
              },
              {
                year: "2018",
                local: "12",
                national: "1",
                intl: "-",
                color: "from-amber-500/20 to-orange-500/20",
                border: "border-amber-500/30",
              },
              {
                year: "2019",
                local: "13",
                national: "-",
                intl: "1",
                color: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30",
              },
            ].map((stat) => (
              <div
                key={stat.year}
                className={`group relative bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl p-1 hover:scale-[1.02] transition-all duration-500`}
              >
                {/* Inner card */}
                <div
                  className={`bg-[#0a0f1a]/90 rounded-2xl p-6 border ${stat.border} hover:border-white/30 transition-all duration-300`}
                >
                  {/* Year with animated underline */}
                  <div className="relative mb-6">
                    <p className="text-5xl font-black text-white text-center tracking-tight">
                      {stat.year}
                    </p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-white/20 to-white/60 rounded-full" />
                  </div>

                  {/* Stats grid */}
                  <div className="space-y-4">
                    {/* Local */}
                    <div className="flex items-center justify-between group/stats">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400/60" />
                        <span className="text-white/40 text-sm font-medium tracking-wide">
                          LOCAL
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-white">
                          {stat.local}
                        </span>
                        <span className="text-white/40 text-xs"></span>
                      </div>
                    </div>

                    {/* National */}
                    <div className="flex items-center justify-between group/stats">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                        <span className="text-white/40 text-sm font-medium tracking-wide">
                          NATIONAL
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-white">
                          {stat.national}
                        </span>
                        <span className="text-white/40 text-xs"></span>
                      </div>
                    </div>

                    {/* International */}
                    <div className="flex items-center justify-between group/stats">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                        <span className="text-white/40 text-sm font-medium tracking-wide">
                          INTERNATIONAL
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-white">
                          {stat.intl}
                        </span>
                        <span className="text-white/40 text-xs"></span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/10 rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/10 rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/10 rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/10 rounded-br-lg" />
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>

          {/* Total stats summary */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-white/40 text-sm mr-2">
                Total Tournaments:
              </span>
              <span className="text-white font-bold">
                54 Local · 3 National · 2 International
              </span>
            </div>
          </div>
        </section>

        {/* COACHING STAFF - enhanced section */}
        <section className="mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium tracking-wide mb-12 animate-up delay-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span> EXPERT GUIDANCE
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 animate-up delay-4">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Coaching Staff</h2>
              <p className="text-white/60 text-lg mt-4 max-w-2xl font-light">
                <span className="text-sky-300 font-medium">AFC Licensed Coaches</span>{" "}
                dedicated to developing technical excellence, tactical awareness, and professional character in every young athlete.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("coaches-modal");
                if (element) {
                  element.style.display = "flex";
                }
              }}
              className="px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-500/50 animate-up delay-4"
            >
              View All Coaches
            </button>
          </div>
          <div className="glass-card rounded-3xl p-10 text-center max-w-4xl mx-auto border-t-2 border-t-sky-500/50 hover-lift group">
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">Our coaching team brings together <span className="text-sky-300 font-semibold">years of professional experience</span> with a commitment to building not just better football players, but better people.</p>

            {/* Photo */}
            <button
              onClick={() =>
                setSelectedImage({
                  src: "/alab_coaches.jpg",
                  alt: "Coaching Staff",
                })
              }
              className="relative w-full h-96 rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl cursor-pointer group focus:outline-none focus:ring-4 focus:ring-sky-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/alab_coaches.jpg"
                alt="Coaching Staff"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                <span className="bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    Click to view full image
                  </span>
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* TAGLINE */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-indigo-500/5 px-8 py-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />
            <p className="text-white/30 text-sm tracking-[0.3em] uppercase mb-4 font-light">
              The New Wave
            </p>
            <p className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
              Football Reimagined.
            </p>
            <p className="text-sky-400 text-3xl font-bold">#AlabFC</p>
          </div>
        </section>

        {/* CONTACT US - enhanced */}
        <section className="mb-32 animate-up delay-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium tracking-wide mb-12">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span> LET&apos;S CONNECT
          </div>
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Get In Touch</h2>
            <p className="text-white/60 text-lg max-w-3xl font-light">Have questions about our programs or want to join ALAB FC? Reach out to us through any of these channels.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Email */}
            <div className="glass-card rounded-2xl p-8 text-center hover:border-sky-500/40 transition-all duration-300 hover-lift border-l-4 border-l-sky-500 group">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/40 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@alabfc.com" className="text-sky-400 hover:text-sky-300 text-sm break-all transition-colors font-medium group-hover:text-sky-200">
                info@alabfc.com
              </a>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-8 text-center hover:border-emerald-500/40 transition-all duration-300 hover-lift border-l-4 border-l-emerald-500 group">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.029a11.042 11.042 0 005.516 5.516l1.029 2.048a1 1 0 00.756.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+639190841668" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors font-medium group-hover:text-emerald-200">
                +63 (919) 084-1668
              </a>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-8 text-center hover:border-amber-500/40 transition-all duration-300 hover-lift border-l-4 border-l-amber-500 group">
              <a href="https://www.google.com/maps/place/Forestry+Development+Center/@14.1521095,121.2362191,3a,75y,325.54h,66.41t/data=!3m7!1e1!3m5!1s_IhZVpIRpewP_nFEbpMQow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D23.593219063877456%26panoid%3D_IhZVpIRpewP_nFEbpMQow%26yaw%3D325.53959078001935!7i13312!8i6656!4m10!1m2!2m1!1sforestry+los+banos+court!3m6!1s0x33bd67007b74308d:0x875b6aae07826c90!8m2!3d14.1546205!4d121.2350535!15sChhmb3Jlc3RyeSBsb3MgYmFub3MgY291cnSSARFnb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F11yrx68r89?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                <p className="text-amber-400 hover:text-amber-300 text-sm transition-colors font-medium group-hover:text-amber-200">
                  Los Baños,<br />Laguna, Philippines
                </p>
              </a>
            </div>

            {/* Facebook */}
            <div className="glass-card rounded-2xl p-8 text-center hover:border-blue-500/40 transition-all duration-300 hover-lift border-l-4 border-l-blue-500 group">
              <a href="https://www.facebook.com/alabfootballclub" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Facebook</h3>
                <p className="text-blue-400 hover:text-blue-300 text-sm transition-colors font-medium group-hover:text-blue-200">
                  @alabfootballclub
                </p>
              </a>
            </div>

            {/* Instagram */}
            <div className="glass-card rounded-2xl p-8 text-center hover:border-pink-500/40 transition-all duration-300 hover-lift border-l-4 border-l-pink-500 group">
              <a href="https://www.instagram.com/alabfc/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.05c-1.893.29-4.286.348-6.521.348-2.235 0-4.628-.058-6.521-.348C3.736 16.236 3 14.989 3 12 3 9.009 3.736 7.762 4.479 6.95 6.372 6.66 8.765 6.6 11 6.6c2.235 0 4.628.06 6.521.35 1.743 1.012 2.479 2.259 2.479 5.25s-.736 4.23-2.479 6.05zm-5.521-3.45c2.487 0 4.5-2.013 4.5-4.5s-2.013-4.5-4.5-4.5c-2.486 0-4.5 2.013-4.5 4.5s2.014 4.5 4.5 4.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Instagram</h3>
                <p className="text-pink-400 hover:text-pink-300 text-sm transition-colors font-medium group-hover:text-pink-200">
                  @alabfc
                </p>
              </a>
            </div>
          </div>

          {/* Contact CTA Card */}
          <div className="relative overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-indigo-500/20 p-8 md:p-16 text-center hover-lift group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.2),transparent_70%)]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Ready to Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-300">ALAB FC</span>?
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Whether you're interested in joining as a player, want to discuss coaching opportunities, or have inquiries about our programs, we'd love to hear from you.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-lg uppercase shadow-[0_0_28px_rgba(56,189,248,0.65)] hover:shadow-[0_0_45px_rgba(56,189,248,1)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400/50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="text-center text-white/20 text-xs tracking-wider border-t border-white/5 pt-8">
          This document is the property of Alab Football Club. Use and
          distribution without authorization is prohibited.
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </div>
  );
}
