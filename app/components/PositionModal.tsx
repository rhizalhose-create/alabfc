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
      className={`fixed m-auto max-w-2xl w-[92%] sm:w-[90%] bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 ${borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-hidden`}
    >
      <div className="relative max-h-[80vh] overflow-y-auto pr-1 sm:pr-2">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 min-h-[32px] min-w-[32px] flex items-center justify-center text-white/60 hover:text-white text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}
          >
            {number}
          </div>
          <h2
            id={`position-${number}-title`}
            className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight"
          >
            {details.title}
          </h2>
        </div>
        <div className="space-y-3 sm:space-y-4 text-white/80 text-xs sm:text-sm">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            {details.description}
          </p>
          <div className="border-l-4 border-sky-500 pl-3 sm:pl-4 py-2 sm:py-3">
            <p className="font-semibold text-white text-sm sm:text-base mb-1.5 sm:mb-2">
              Key Responsibilities:
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-1.5 text-white/80 text-[11px] sm:text-xs md:text-sm">
              {details.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="font-semibold text-white text-sm sm:text-base mb-1.5 sm:mb-2">
              Legendary Players:
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {details.famousPlayers.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-0.5 bg-white/10 rounded-full text-white/80 text-[10px] sm:text-xs"
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
          className="mt-4 sm:mt-6 w-full min-h-[36px] py-2 sm:py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
        >
          Got it
        </button>
      </div>
    </dialog>
  );
}
