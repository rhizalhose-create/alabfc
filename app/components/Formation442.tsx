"use client";

interface FormationPlayer {
  readonly number: number;
  readonly position: string;
  readonly x: number; // percentage from left
  readonly y: number; // percentage from top
  readonly role: "GK" | "DEF" | "MID" | "FWD";
}

const formation442: FormationPlayer[] = [
  // 1 Goalkeeper
  { number: 1, position: "GK", x: 50, y: 12, role: "GK" },

  // 4 Defenders
  { number: 2, position: "RB", x: 70, y: 30, role: "DEF" },
  { number: 5, position: "CB", x: 45, y: 28, role: "DEF" },
  { number: 4, position: "CB", x: 55, y: 28, role: "DEF" },
  { number: 3, position: "LB", x: 30, y: 30, role: "DEF" },

  // 4 Midfielders
  { number: 7, position: "LM", x: 28, y: 48, role: "MID" },
  { number: 6, position: "CM", x: 45, y: 50, role: "MID" },
  { number: 8, position: "CM", x: 55, y: 50, role: "MID" },
  { number: 11, position: "RM", x: 72, y: 48, role: "MID" },

  // 2 Forwards
  { number: 9, position: "ST", x: 45, y: 70, role: "FWD" },
  { number: 10, position: "ST", x: 55, y: 70, role: "FWD" },
];

interface Formation442Props {
  readonly hoveredNumber: number | null;
  readonly onHover: (n: number | null) => void;
  readonly onClick: (n: number) => void;
}

function getPlayerColor(role: "GK" | "DEF" | "MID" | "FWD"): string {
  switch (role) {
    case "GK":
      return "from-red-500 to-red-600 ring-red-500/50";
    case "DEF":
      return "from-sky-500 to-sky-600 ring-sky-500/50";
    case "MID":
      return "from-emerald-500 to-emerald-600 ring-emerald-500/50";
    case "FWD":
      return "from-rose-500 to-rose-600 ring-rose-500/50";
  }
}

export function Formation442({
  hoveredNumber,
  onHover,
  onClick,
}: Formation442Props) {
  return (
    <>
      {formation442.map((player) => {
        const isHovered = hoveredNumber === player.number;
        const colorClass = getPlayerColor(player.role);

        return (
          <button
            key={player.number}
            type="button"
            onClick={() => onClick(player.number)}
            onMouseEnter={() => onHover(player.number)}
            onMouseLeave={() => onHover(null)}
            aria-label={`Player ${player.number}: ${player.position}`}
            className="absolute group focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              left: `${player.x}%`,
              top: `${player.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: isHovered ? 100 : 60,
            }}
          >
            {/* Player Circle */}
            <div
              className={`relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br ${colorClass} ring-2 ring-white/80 shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isHovered ? "scale-125 shadow-2xl" : "group-hover:scale-110"
              }`}
            >
              <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                {player.number}
              </span>
            </div>

            {/* Position Label - shows on hover */}
            {isHovered && (
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm text-gray-900 text-[8px] sm:text-[9px] md:text-xs font-semibold px-1 py-0.5 rounded-sm shadow-lg pointer-events-none"
                style={{ zIndex: 100 }}
              >
                {player.position}
              </div>
            )}

            {/* Connecting line to position (subtle) */}
            {isHovered && (
              <div
                className="absolute w-0.5 h-3 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"
                style={{
                  left: "50%",
                  top: "100%",
                  transform: "translateX(-50%)",
                }}
              />
            )}
          </button>
        );
      })}
    </>
  );
}
