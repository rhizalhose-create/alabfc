"use client";

interface SquadNumberBubbleProps {
  readonly number: number;
  readonly label: string;
  readonly ariaLabel: string;
  readonly hoveredNumber: number | null;
  readonly onHover: (n: number | null) => void;
  readonly onClick: (n: number) => void;
}

export function SquadNumberBubble({
  number,
  label,
  ariaLabel,
  hoveredNumber,
  onHover,
  onClick,
}: SquadNumberBubbleProps) {
  const isHovered = hoveredNumber === number;

  const getGradient = () => {
    if (number === 1) return "from-red-500 to-red-700";
    if (number >= 2 && number <= 6) return "from-sky-500 to-sky-700";
    if (number === 7 || number === 11) return "from-purple-500 to-purple-700";
    if (number === 8) return "from-emerald-500 to-emerald-700";
    if (number === 9) return "from-rose-500 to-rose-700";
    if (number === 10) return "from-yellow-500 to-yellow-700";
    return "from-sky-500 to-sky-700";
  };

  const getBorder = () => {
    if (number === 1) return "border-red-500/50";
    if (number >= 2 && number <= 6) return "border-sky-500/50";
    if (number === 7 || number === 11) return "border-purple-500/50";
    if (number === 8) return "border-emerald-500/50";
    if (number === 9) return "border-rose-500/50";
    if (number === 10) return "border-yellow-500/50";
    return "border-sky-500/50";
  };

  const positionMeanings: { [key: number]: string } = {
    1: "Goalkeeper - The last line of defense 🧤",
    2: "Right Back - Defends the right flank",
    3: "Left Back - Defends the left flank",
    4: "Center Back / Defensive Midfielder - Versatile defender",
    5: "Center Back - Central defender",
    6: "Defensive Midfielder - Shields the defense",
    7: "Right Wing - Attacks from the right ⚡",
    8: "Center Midfielder - Controls the tempo",
    9: "Striker - Main goalscorer ⚽",
    10: "Playmaker - Creative attacker ⭐",
    11: "Left Wing - Attacks from the left",
  };

  return (
    <button
      type="button"
      className="group relative flex flex-col items-center justify-center min-h-[28px] min-w-[28px] xs:min-h-[32px] xs:min-w-[32px] sm:min-h-0 sm:min-w-0 p-0.5 xs:p-0.5 sm:p-1 rounded-lg xs:rounded-lg sm:rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
      onMouseEnter={() => onHover(number)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(number)}
      onBlur={() => onHover(null)}
      onClick={() => onClick(number)}
      aria-label={ariaLabel}
      aria-describedby={isHovered ? `tooltip-${number}` : undefined}
    >
      {isHovered && (
        <div
          id={`tooltip-${number}`}
          className={`absolute z-50 w-[max(140px,min(100vw-2rem,180px))] max-w-[calc(100vw-1rem)] bg-[#0f172a]/95 backdrop-blur-xl text-white text-[9px] sm:text-[10px] rounded-lg sm:rounded-lg py-1.5 sm:py-2 px-2.5 sm:px-3 shadow-xl border ${getBorder()} text-center font-normal leading-relaxed bottom-full mb-1.5 left-1/2 -translate-x-1/2 sm:bottom-full sm:mb-1.5 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[4px] sm:before:border-[5px] before:border-transparent before:border-t-[#0f172a]/95`}
          role="tooltip"
        >
          {positionMeanings[number]}
        </div>
      )}
      <div
        className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 rounded-sm xs:rounded-md sm:rounded-lg bg-gradient-to-br ${getGradient()} flex items-center justify-center text-white font-bold text-[8px] xs:text-[9px] sm:text-xs shadow-[0_4px_14px_rgba(0,0,0,0.25)] ring-1 ring-black/20 transition-transform duration-300 group-hover:scale-105`}
      >
        {number}
      </div>
      <span className="text-white/90 text-[6px] xs:text-[7px] sm:text-[8px] mt-0.5 font-medium tracking-wide truncate max-w-full">{label}</span>
    </button>
  );
}
