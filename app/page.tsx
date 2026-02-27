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

// --- Main component ---
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
      {/* About Alab — full-screen overlay, sits above everything */}
      {showAbout && <AboutPage onBack={() => setShowAbout(false)} />}

      {/* DESKTOP VERSION - Hidden on mobile */}
      <main className="hidden md:flex relative h-screen w-screen items-center justify-center overflow-hidden bg-[#0a0f1a]">
        {/* Background */}
        <Image src="/alab1.jpg" alt="Alab Football Club Background" fill className="object-cover brightness-[0.6] saturate-[1.2] scale-105" priority />

        {/* Top-left logo */}
        <div className="absolute top-8 left-8 z-50">
          <Image src="/alab.png" alt="Alab Football Club Logo" width={150} height={150} className="object-contain drop-shadow-2xl" priority />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03050a]/80 via-[#111827]/70 to-[#1e2a3a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/30 via-transparent to-transparent" />

        {/* Top Navigation */}
        <nav className="absolute top-8 right-10 flex items-center gap-3 z-40">
          <button
            type="button"
            onClick={() => setShowAbout(true)}
            className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-200 text-sm font-medium tracking-wide backdrop-blur-sm"
          >
            About Alab
          </button>
          <button
            type="button"
            onClick={() => setCoachesOpen(true)}
            className="px-4 py-2 rounded-xl border border-sky-400/40 bg-sky-500/10 hover:bg-sky-500/25 text-sky-300 hover:text-white transition-all duration-200 text-sm font-medium tracking-wide backdrop-blur-sm"
          >
            Coaches Profile
          </button>
        </nav>

        {/* Club header */}
        <div className="absolute left-[8%] md:left-[12%] top-[12%] text-white z-30 max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base tracking-wider">
            <span className="text-white/40 font-light">Est. 2015 · Laguna</span>
            <span className="text-white/20 font-thin">&#47;&#47;</span>
            <button
              onClick={() => setShowAbout(true)}
              className="text-white font-bold tracking-wide hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded px-2"
            >
              ALAB
            </button>
            <span className="text-white/20 font-thin">&#47;&#47;</span>
            <span className="text-white/70 font-light">Football Club</span>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-white/40 via-sky-400/60 to-transparent mt-4 rounded-full" />
        </div>

        {/* Football Field */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[70%] md:w-[65%] h-[50%]">
            <div className="relative w-full h-full bg-black/20 backdrop-blur-[2px] border-2 border-white/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,150,255,0.2)]">
              <FieldZone third="defensive" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <FieldZone third="mid" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <FieldZone third="attacking" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
              <div className="absolute left-1/2 top-1/2 w-[100px] h-[100px] border-2 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[50px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[50px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
              <div className="absolute left-[12%] top-1/2 w-2 h-2 bg-white/80 rounded-full -translate-y-1/2" />
              <div className="absolute right-[12%] top-1/2 w-2 h-2 bg-white/80 rounded-full -translate-y-1/2" />
              <div className="absolute left-0 top-0 w-6 h-6 border-l-2 border-t-2 border-white/50 rounded-tl-2xl" />
              <div className="absolute right-0 top-0 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-2xl" />
              <div className="absolute left-0 bottom-0 w-6 h-6 border-l-2 border-b-2 border-white/50 rounded-bl-2xl" />
              <div className="absolute right-0 bottom-0 w-6 h-6 border-r-2 border-b-2 border-white/50 rounded-br-2xl" />
            </div>
          </div>
        </div>

        {/* Squad Numbers */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] max-w-3xl">
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,150,255,0.2)]">
            <h3 className="text-white/90 font-bold text-lg mb-3 text-center tracking-wider">SQUAD NUMBERS</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {squadNumbers.map(({ number, label, ariaLabel }) => (
                <SquadNumberBubble key={number} number={number} label={label} ariaLabel={ariaLabel} hoveredNumber={hoveredNumber} onHover={setHoveredNumber} onClick={openPositionModal} />
              ))}
              <div className="flex flex-col items-center p-2 opacity-0" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Decorative orbs */}
        <div className="absolute bottom-[20%] right-[15%] w-60 h-60 bg-indigo-500/3 rounded-full blur-3xl" />
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-sky-500/3 rounded-full blur-3xl" />

        {/* Copyright */}
        <div className="absolute bottom-8 right-36 text-white/20 text-xs font-light tracking-widest z-40">© 2025</div>

        {/* Floating Contact Us button */}
        <div className="absolute bottom-6 right-8 z-40">
          <span className="absolute inset-0 rounded-2xl bg-sky-400/40 animate-ping" />
          <span className="absolute -inset-1 rounded-2xl bg-sky-500/25 blur-md" />
          <button type="button" onClick={() => setContactOpen(true)} aria-label="Open contact information"
            className="relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm tracking-widest uppercase shadow-[0_0_28px_rgba(56,189,248,0.65)] hover:shadow-[0_0_45px_rgba(56,189,248,1)] transition-all duration-300 hover:scale-105 active:scale-95">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Contact Us
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,1)] animate-pulse" />
          </button>
        </div>
{/* */}
        {/* Modals */}
        {(activeModal === "defensive" || activeModal === "mid" || activeModal === "attacking") && <ThirdModal third={activeModal} onClose={closeModal} />}
        {selectedPosition && <PositionModal number={selectedPosition} onClose={closePositionModal} />}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        {coachesOpen && <CoachesProfileModal onClose={() => setCoachesOpen(false)} />}
      </main>

      {/* MOBILE VERSION - Hidden on desktop */}
      <main className="md:hidden relative min-h-screen w-full flex flex-col bg-[#0a0f1a] overflow-y-auto">
        {/* Background */}
        <Image src="/alab1.jpg" alt="Alab Football Club Background" fill className="object-cover brightness-[0.6] saturate-[1.2] scale-105 -z-10" priority />

        {/* Overlays */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#03050a]/80 via-[#111827]/70 to-[#1e2a3a]/60 -z-10" />
        <div className="fixed inset-0 bg-gradient-to-t from-sky-950/30 via-transparent to-transparent -z-10" />

        {/* Top Navigation */}
        <nav className="flex items-center justify-between gap-2 p-3 z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="w-12 h-12">
            <Image src="/alab.png" alt="Alab Football Club Logo" width={48} height={48} className="object-contain drop-shadow-lg" priority />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-200 text-xs font-medium tracking-wide backdrop-blur-sm"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setCoachesOpen(true)}
              className="px-3 py-1.5 rounded-lg border border-sky-400/40 bg-sky-500/10 hover:bg-sky-500/25 text-sky-300 hover:text-white transition-all duration-200 text-xs font-medium tracking-wide backdrop-blur-sm"
            >
              Coaches
            </button>
          </div>
        </nav>

        {/* Club Header */}
        <div className="px-4 py-4 text-white z-30 text-center">
          <h1 className="text-2xl font-bold tracking-wider mb-1">ALAB</h1>
          <p className="text-xs text-white/60 font-light">Est. 2015 · Laguna · Football Club</p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-white/40 via-sky-400/60 to-transparent mt-2 mx-auto rounded-full" />
        </div>

        {/* Football Field */}
        <div className="px-4 py-4">
          <div className="relative w-full aspect-[4/5] bg-black/20 backdrop-blur-[2px] border-2 border-white/40 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,150,255,0.2)]">
            <FieldZone third="defensive" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
            <FieldZone third="mid" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
            <FieldZone third="attacking" hoveredThird={hoveredThird} onHover={setHoveredThird} onClick={openModal} />
            <div className="absolute left-1/2 top-1/2 w-[60px] h-[60px] border-2 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[40px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[40px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)] z-10" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-[60%] border-2 border-white/40" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[8%] h-[30%] border-2 border-white/40" />
            <div className="absolute left-[12%] top-1/2 w-1.5 h-1.5 bg-white/80 rounded-full -translate-y-1/2" />
            <div className="absolute right-[12%] top-1/2 w-1.5 h-1.5 bg-white/80 rounded-full -translate-y-1/2" />
            <div className="absolute left-0 top-0 w-4 h-4 border-l-2 border-t-2 border-white/50 rounded-tl-2xl" />
            <div className="absolute right-0 top-0 w-4 h-4 border-r-2 border-t-2 border-white/50 rounded-tr-2xl" />
            <div className="absolute left-0 bottom-0 w-4 h-4 border-l-2 border-b-2 border-white/50 rounded-bl-2xl" />
            <div className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 border-white/50 rounded-br-2xl" />
          </div>
        </div>

        {/* Squad Numbers */}
        <div className="px-4 py-4">
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-[0_0_30px_rgba(0,150,255,0.2)]">
            <h3 className="text-white/90 font-bold text-base mb-3 text-center tracking-wider">SQUAD</h3>
            <div className="grid grid-cols-4 gap-2">
              {squadNumbers.map(({ number, label, ariaLabel }) => (
                <SquadNumberBubble key={number} number={number} label={label} ariaLabel={ariaLabel} hoveredNumber={hoveredNumber} onHover={setHoveredNumber} onClick={openPositionModal} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="px-4 py-4">
          <button type="button" onClick={() => setContactOpen(true)} aria-label="Open contact information"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm tracking-widest uppercase shadow-[0_0_28px_rgba(56,189,248,0.65)] transition-all duration-300 active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Contact Us
          </button>
        </div>

        {/* Copyright */}
        <div className="px-4 py-4 text-white/30 text-xs font-light text-center">© 2025 ALAB Football Club</div>

        {/* Modals */}
        {(activeModal === "defensive" || activeModal === "mid" || activeModal === "attacking") && <ThirdModal third={activeModal} onClose={closeModal} />}
        {selectedPosition && <PositionModal number={selectedPosition} onClose={closePositionModal} />}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        {coachesOpen && <CoachesProfileModal onClose={() => setCoachesOpen(false)} />}
      </main>
    </>
  );
}
