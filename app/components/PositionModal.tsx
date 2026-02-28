"use client";

import { useEffect, useRef } from "react";
import { positionDetails } from "@/app/constants/positions";

interface PositionModalProps {
  readonly number: number;
  readonly onClose: () => void;
}

export function PositionModal({ number, onClose }: PositionModalProps) {
  const details = positionDetails[number];
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

  const getColorClass = () => {
    if (number === 1) return "from-red-500 to-red-700 border-red-500/60";
    if (number >= 2 && number <= 6) return "from-sky-500 to-sky-700 border-sky-500/60";
    if (number === 7 || number === 11)
      return "from-purple-500 to-purple-700 border-purple-500/60";
    if (number === 8)
      return "from-emerald-500 to-emerald-700 border-emerald-500/60";
    if (number === 9) return "from-rose-500 to-rose-700 border-rose-500/60";
    if (number === 10)
      return "from-yellow-500 to-yellow-700 border-yellow-500/60";
    return "from-sky-500 to-sky-700 border-sky-500/60";
  };

  const [gradientFrom, gradientTo, borderColor] = getColorClass().split(" ");

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby={`position-${number}-title`}
      className={`fixed m-auto max-w-2xl w-[92%] sm:w-[90%] bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 ${borderColor} rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-hidden`}
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
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}
          >
            {number}
          </div>
          <h2
            id={`position-${number}-title`}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            {details.title}
          </h2>
        </div>
        <div className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {details.description}
          </p>
          <div className="border-l-4 border-sky-500 pl-4 sm:pl-6 py-3 sm:py-4">
            <p className="font-semibold text-white text-lg sm:text-xl mb-2 sm:mb-3">
              Key Responsibilities:
            </p>
            <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base md:text-lg">
              {details.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-semibold text-white text-lg sm:text-xl mb-2 sm:mb-3">
              Legendary Players:
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {details.famousPlayers.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs sm:text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 sm:mt-8 w-full min-h-[48px] py-3 sm:py-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
        >
          Got it
        </button>
      </div>
    </dialog>
  );
}
