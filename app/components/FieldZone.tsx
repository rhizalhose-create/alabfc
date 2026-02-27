"use client";

import { zoneConfig } from "@/app/constants/fieldZones";

interface FieldZoneProps {
  readonly third: "defensive" | "mid" | "attacking";
  readonly hoveredThird: string | null;
  readonly onHover: (t: string | null) => void;
  readonly onClick: (t: string) => void;
}

export function FieldZone({
  third,
  hoveredThird,
  onHover,
  onClick,
}: FieldZoneProps) {
  const cfg = zoneConfig[third];
  const isHovered = hoveredThird === third;

  return (
    <button
      type="button"
      className={`${cfg.positionClass} ${cfg.roundedClass} focus:outline-none focus:ring-2 ${cfg.focusRingClass}`}
      onMouseEnter={() => onHover(third)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(third)}
      aria-label={cfg.ariaLabel}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 pointer-events-none ${
          isHovered ? cfg.overlayActive : ""
        }`}
      />
      {isHovered && (
        <div
          className={`absolute -inset-[2px] border-2 ${cfg.borderActive} pointer-events-none`}
        />
      )}
      <span
        className={`${cfg.labelClass} ${
          isHovered ? cfg.labelActive : "text-white/80"
        }`}
      >
        {cfg.label}
      </span>
    </button>
  );
}
