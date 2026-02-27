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
      className={`fixed m-auto max-w-2xl w-[90%] bg-gradient-to-br from-[#1a2332] to-[#0f1420] border-4 ${borderColor} rounded-3xl p-10 shadow-[0_0_70px_rgba(0,150,255,0.7)] backdrop:bg-black/70 backdrop:backdrop-blur-sm`}
    >
      <div className="relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 text-white/60 hover:text-white text-3xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-3xl shadow-lg`}
          >
            {number}
          </div>
          <h2
            id={`position-${number}-title`}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {details.title}
          </h2>
        </div>
        <div className="space-y-6 text-white/80 text-lg">
          <p className="text-xl leading-relaxed">{details.description}</p>
          <div className="border-l-4 border-sky-500 pl-6 py-3">
            <p className="font-semibold text-white text-xl mb-3">
              Key Responsibilities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 text-lg">
              {details.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-semibold text-white text-xl mb-3">
              Legendary Players:
            </p>
            <div className="flex flex-wrap gap-2">
              {details.famousPlayers.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
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
          className="mt-8 w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xl rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          GOT IT
        </button>
      </div>
    </dialog>
  );
}
