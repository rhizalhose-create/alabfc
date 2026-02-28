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
      className={`fixed m-auto max-w-2xl w-[92%] sm:w-[90%] bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 ${cfg.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-hidden`}
    >
      <div className="relative max-h-[80vh] overflow-y-auto pr-1 sm:pr-2">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 min-h-[36px] min-w-[36px] flex items-center justify-center text-white/60 hover:text-white text-xl sm:text-2xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1.5"
          aria-label="Close modal"
        >
          ✕
        </button>
        <h2
          id={cfg.titleId}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight"
        >
          {cfg.title}
        </h2>
        <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            {cfg.intro}{" "}
            <span className={`${cfg.highlightClass} font-semibold`}>
              {cfg.name}
            </span>{" "}
            {cfg.nameEnd}
          </p>
          <div
            className={`border-l-4 ${cfg.accentColor} pl-3 sm:pl-4 py-2 sm:py-3`}
          >
            <p className="font-semibold text-white text-base sm:text-lg mb-1.5 sm:mb-2">
              Key characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-1.5 text-white/80 text-xs sm:text-sm md:text-base">
              {cfg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <p className="italic text-white/60 text-xs sm:text-sm md:text-base">
            &quot;{cfg.quote}&quot;
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`mt-4 sm:mt-6 w-full min-h-[40px] py-2 sm:py-3 ${cfg.buttonClass} text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f172a]`}
        >
          Got it
        </button>
      </div>
    </dialog>
  );
}
