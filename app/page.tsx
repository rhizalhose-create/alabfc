"use client";

import Image from "next/image";
import { useState } from "react";
import { squadNumbers } from "@/app/constants/squad";
import { SquadNumberBubble } from "@/app/components/SquadNumberBubble";
import { FieldZone } from "@/app/components/FieldZone";
import { ThirdModal } from "@/app/components/ThirdModal";
import { PositionModal } from "@/app/components/PositionModal";
import { ContactModal } from "@/app/components/ContactModal";
import { CoachesProfileModal } from "@/app/components/CoachesProfileModal";
import { AboutPage } from "@/app/components/AboutPage";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [hoveredThird, setHoveredThird] = useState<string | null>(null);
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [coachesOpen, setCoachesOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const openModal = (third: string) => setActiveModal(third);
  const closeModal = () => setActiveModal(null);
  const openPositionModal = (number: number) => setSelectedPosition(number);
  const closePositionModal = () => setSelectedPosition(null);

  return (
    <>
      {showAbout && <AboutPage onBack={() => setShowAbout(false)} onCoachesOpen={() => setCoachesOpen(true)} />}

      {/* Single responsive layout: scroll on small screens, fixed on md+ */}
      <main className="relative min-h-screen w-full max-w-full md:h-screen md:overflow-hidden flex flex-col md:flex-none md:items-center md:justify-center overflow-x-hidden overflow-y-auto bg-[#050810]">
        {/* Background - fixed on desktop only */}
        <div className="fixed inset-0 -z-20 md:z-0">
          <Image src="/alab1.jpg" alt="Alab Football Club Background" fill className="object-cover brightness-[0.55] saturate-[1.15] scale-105" priority />
        </div>
        <div className="fixed inset-0 -z-10 md:z-0 bg-gradient-to-br from-[#050810]/92 via-[#0f172a]/85 to-[#0c1222]/92 md:from-[#050810]/90 md:via-[#0f172a]/80 md:to-[#0c1222]/90" />
        <div className="fixed inset-0 -z-10 md:z-0 bg-gradient-to-t from-sky-950/20 via-transparent to-transparent" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-screen h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)] pointer-events-none -z-10 hidden md:block" />

        {/* Mobile top bar */}
        <header className="md:hidden sticky top-0 z-50 flex items-center justify-between gap-1 xs:gap-1.5 px-1.5 xs:px-2 py-1.5 xs:py-2 glass border-b border-white/5">
          <div className="flex items-center gap-1.5 xs:gap-2 min-w-0">
            <div className="w-8 xs:w-9 h-8 xs:h-9 rounded-lg xs:rounded-xl flex-shrink-0 flex items-center justify-center bg-white/5 ring-1 ring-white/10">
              <Image
                src="/alab.png"
                alt="Alab Football Club Logo"
                width={44}
                height={44}
                className="w-7 xs:w-8 h-7 xs:h-8 object-contain"
                priority
              />
            </div>
            <div className="leading-tight min-w-0">
              <p className="text-white font-semibold tracking-tight text-[11px] xs:text-xs truncate">
                ALAB FC
              </p>
              <p className="text-white/40 text-[7px] xs:text-[8px] tracking-wide truncate">
                Los Baños, Laguna
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="min-h-[36px] min-w-[36px] xs:min-h-[40px] xs:min-w-[40px] px-1.5 xs:px-2 py-1 xs:py-1.5 rounded-full glass text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-[9px] xs:text-[10px] font-medium tracking-wide flex items-center justify-center"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setCoachesOpen(true)}
              className="min-h-[36px] min-w-[36px] xs:min-h-[40px] xs:min-w-[40px] px-1.5 xs:px-2 py-1 xs:py-1.5 rounded-full bg-sky-500/15 border border-sky-400/25 text-sky-300 hover:bg-sky-500/25 hover:text-white transition-all duration-300 text-[9px] xs:text-[10px] font-medium tracking-wide backdrop-blur-xl flex items-center justify-center"
            >
              Coaches
            </button>
          </nav>
        </header>

        {/* Desktop floating header */}
        <div className="hidden md:flex absolute top-6 left-6 right-6 z-50 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-xl p-1.5 ring-1 ring-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_12px_30px_-12px_rgba(0,0,0,0.5)]">
              <Image
                src="/alab.png"
                alt="Alab Football Club Logo"
                width={120}
                height={120}
                className="w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-white/50 text-[11px] tracking-widest uppercase">
                Est. 2015 · Laguna
              </p>
              <p className="text-white text-base font-semibold tracking-wide">
                Alab Football Club
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="px-4 py-2 rounded-full glass text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-medium tracking-wide"
            >
              About Alab
            </button>
            <button
              type="button"
              onClick={() => setCoachesOpen(true)}
              className="px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 hover:bg-sky-500/25 hover:text-white transition-all duration-300 text-xs font-medium tracking-wide backdrop-blur-xl"
            >
              Coaches
            </button>
          </nav>
        </div>

        {/* Club header - compact on mobile, hero copy on desktop */}
        <div className="px-1.5 xs:px-3 py-2 xs:py-2.5 md:absolute md:left-[6%] lg:left-[8%] xl:left-[12%] md:top-[8%] lg:top-[10%] text-white z-30 max-w-4xl md:max-w-none">
          <div className="md:hidden flex flex-wrap items-center justify-center gap-x-1 xs:gap-x-1.5 gap-y-0.5 text-[9px] xs:text-[10px] tracking-wide">
            <span className="text-white/45 font-light">Est. 2015 · Laguna</span>
            <span className="text-white/15">/</span>
            <button
              onClick={() => setShowAbout(true)}
              className="text-white font-semibold tracking-wide hover:text-sky-300 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-lg px-1.5 xs:px-2 py-0.5"
            >
              ALAB
            </button>
          </div>
        </div>

        {/* Football Field - responsive container */}
        <div className="flex-1 flex items-center justify-center w-full max-w-full px-1.5 xs:px-2 xs:py-3 sm:px-2 sm:py-5 md:px-0 md:py-0 md:absolute md:inset-0 md:flex-none mt-6 md:mt-0">
          <div className="relative w-[85%] xs:w-[10%] sm:w-[10%] md:w-[10%] lg:w-[10%] xl:w-[45%] aspect-[2]">
            <div className="relative w-full h-full glass rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_-12px_rgba(0,0,0,0.4)] md:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_80px_-20px_rgba(56,189,248,0.15)]">
              <FieldZone third="defensive" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <FieldZone third="mid" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <FieldZone third="attacking" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <div className="absolute left-1/2 top-1/2 w-12 h-12 sm:w-26 sm:h-16 md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] border-2 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] sm:w-[4px] md:w-[6px] h-8 sm:h-10 md:h-[50px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] sm:w-[4px] md:w-[6px] h-8 sm:h-10 md:h-[50px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
              <div className="absolute left-[12%] top-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 bg-white/80 rounded-full -translate-y-1/2" />
              <div className="absolute right-[12%] top-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 bg-white/80 rounded-full -translate-y-1/2" />
              <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-white/50 rounded-tl-xl sm:rounded-tl-2xl" />
              <div className="absolute right-0 top-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-r-2 border-t-2 border-white/50 rounded-tr-xl sm:rounded-tr-2xl" />
              <div className="absolute left-0 bottom-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-l-2 border-b-2 border-white/50 rounded-bl-xl sm:rounded-bl-2xl" />
              <div className="absolute right-0 bottom-0 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-white/50 rounded-br-xl sm:rounded-br-2xl" />
            </div>
          </div>
        </div>

        {/* Squad Numbers - responsive grid and padding */}
        <section className="w-full max-w-full px-1.5 xs:px-2.5 xs:py-3 sm:px-3 sm:py-4 md:absolute md:bottom-[2%] md:left-1/2 md:-translate-x-1/2 md:w-[88%] lg:w-[82%] xl:w-[78%] md:max-w-[min(100%,900px)] md:px-0 md:py-0">
          <div className="glass rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-2.5 sm:p-3 md:p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_16px_32px_-8px_rgba(0,0,0,0.35)] md:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_-12px_rgba(0,0,0,0.4)] max-w-md sm:max-w-lg md:max-w-full mx-auto">
            <h3 className="text-white/95 font-semibold text-[0.55rem] xs:text-[0.6rem] sm:text-[0.65rem] mb-1.5 xs:mb-2 sm:mb-3 text-center tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em] uppercase">Squad Numbers</h3>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-0.5 xs:gap-1 sm:gap-1.5">
              {squadNumbers.map(({ number, label, ariaLabel }) => (
                <SquadNumberBubble key={number} number={number} label={label} ariaLabel={ariaLabel} hoveredNumber={hoveredNumber} onHover={setHoveredNumber} onClick={openPositionModal} />
              ))}
            </div>
          </div>
        </section>

        {/* Ambient glow (desktop only) */}
        <div className="hidden md:block absolute bottom-[18%] right-[10%] w-80 h-80 bg-sky-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="hidden md:block absolute top-[18%] left-[8%] w-96 h-96 bg-indigo-500/4 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Contact CTA - full width on mobile, floating on desktop */}
        <div className="w-full max-w-full px-1.5 py-2 xs:px-2 xs:py-3 sm:px-3 md:absolute md:bottom-4 md:right-4 md:left-auto md:w-auto md:px-0 md:py-0 z-40" style={{maxWidth: 'calc(100% - 1.5rem)'}}>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            aria-label="Open contact information"
            className="w-full md:w-auto min-h-[40px] xs:min-h-[44px] flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-[11px] xs:text-xs sm:text-xs tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_30px_-5px_rgba(56,189,248,0.4)] md:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_0_50px_-5px_rgba(56,189,248,0.6)] md:hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            <svg className="w-3.5 xs:w-4 sm:w-4 h-3.5 xs:h-4 sm:h-4 flex-shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Contact Us
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
          </button>
        </div>

        {/* Copyright - mobile only (desktop has its own below) */}
        <div className="md:hidden px-1.5 xs:px-3 pb-3 xs:pb-4 pt-1 text-center text-white/25 text-[8px] xs:text-[10px] font-light tracking-widest">© 2025 ALAB Football Club</div>

        {/* Copyright - desktop only */}
        <div className="hidden md:block absolute bottom-4 right-24 xl:right-28 text-white/25 text-[10px] font-light tracking-widest z-40">© 2025</div>

        {/* Modals */}
        {(activeModal === "defensive" || activeModal === "mid" || activeModal === "attacking") && <ThirdModal third={activeModal} onClose={closeModal} />}
        {selectedPosition && <PositionModal number={selectedPosition} onClose={closePositionModal} />}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        {coachesOpen && <CoachesProfileModal onClose={() => setCoachesOpen(false)} />}
      </main>
    </>
  );
}
