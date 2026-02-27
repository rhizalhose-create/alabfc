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
      className={`fixed m-auto max-w-2xl w-[90%] bg-gradient-to-br from-[#1a2332] to-[#0f1420] border-4 ${cfg.borderColor} rounded-3xl p-10 ${cfg.shadowColor} backdrop:bg-black/70 backdrop:backdrop-blur-sm`}
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
        <h2 id={cfg.titleId} className="text-5xl md:text-6xl font-bold text-white mb-6">
          {cfg.title}
        </h2>
        <div className="space-y-6 text-white/80 text-lg">
          <p className="text-xl">
            {cfg.intro}{" "}
            <span className={`${cfg.highlightClass} font-semibold`}>
              {cfg.name}
            </span>{" "}
            {cfg.nameEnd}
          </p>
          <div className={`border-l-4 ${cfg.accentColor} pl-6 py-3`}>
            <p className="font-semibold text-white text-xl mb-3">
              Key characteristics:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 text-lg">
              {cfg.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <p className="italic text-white/60 text-lg">
            &quot;{cfg.quote}&quot;
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`mt-8 w-full py-4 ${cfg.buttonClass} text-white font-bold text-xl rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/50`}
        >
          GOT IT
        </button>
      </div>
    </dialog>
  );
}
