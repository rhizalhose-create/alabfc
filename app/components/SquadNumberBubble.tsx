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
      className="relative flex flex-col items-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/50"
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
          className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 w-40 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg border ${getBorder()} text-center`}
          role="tooltip"
        >
          {positionMeanings[number]}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
      >
        {number}
      </div>
      <span className="text-white/90 text-xs mt-1 font-medium">{label}</span>
    </button>
  );
}
