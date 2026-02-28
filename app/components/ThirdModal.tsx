"use client";

import { useEffect, useRef } from "react";
import { thirdModalConfig } from "@/app/constants/modals";

interface ThirdModalProps {
  readonly third: "defensive" | "mid" | "attacking";
  readonly onClose: () => void;
}

export function ThirdModal({ third, onClose }: ThirdModalProps) {
  const cfg = thirdModalConfig[third];
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (!el.open) el.showModal();

    const onMouseDown = (e: MouseEvent) => {
      if (e.target === el) onClose();
    };
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("cancel", onCancel);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("cancel", onCancel);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby={cfg.titleId}
      className={`fixed m-auto max-w-2xl w-[92%] sm:w-[90%] bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 ${cfg.borderColor} rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-hidden`}
    >
      <div className="relative max-h-[80vh] overflow-y-auto pr-1 sm:pr-2">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/60 hover:text-white text-2xl sm:text-3xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          aria-label="Close modal"
        >
          ✕
        </button>
        <h2
          id={cfg.titleId}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          {cfg.title}
        </h2>
        <div className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {cfg.intro}{" "}
            <span className={`${cfg.highlightClass} font-semibold`}>
              {cfg.name}
            </span>{" "}
            {cfg.nameEnd}
          </p>
          <div
            className={`border-l-4 ${cfg.accentColor} pl-4 sm:pl-6 py-3 sm:py-4`}
          >
            <p className="font-semibold text-white text-lg sm:text-xl mb-2 sm:mb-3">
              Key characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base md:text-lg">
              {cfg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <p className="italic text-white/60 text-sm sm:text-base md:text-lg">
            &quot;{cfg.quote}&quot;
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`mt-6 sm:mt-8 w-full min-h-[48px] py-3 sm:py-4 ${cfg.buttonClass} text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f172a]`}
        >
          Got it
        </button>
      </div>
    </dialog>
  );
}
