const zoneConfig = {
  defensive: {
    positionClass: "absolute left-0 top-0 w-1/3 h-full z-10",
    roundedClass: "rounded-l-2xl",
    focusRingClass: "focus:ring-sky-500/50",
    overlayActive: "bg-gradient-to-r from-sky-500/20 via-transparent to-transparent backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(0,200,255,0.3)] border-r border-sky-400/50",
    borderActive: "border-sky-400/30 rounded-l-2xl",
    labelClass: "absolute left-1/2 top-[15%] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider -translate-x-1/2 transition-all duration-300 px-2 text-center",
    labelActive: "text-sky-300 drop-shadow-[0_0_10px_rgba(0,200,255,0.7)] scale-105",
    label: "DEFENSIVE THIRD",
    ariaLabel: "Defensive Third - click to learn more",
  },
  mid: {
    positionClass: "absolute left-1/3 top-0 w-1/3 h-full z-10",
    roundedClass: "",
    focusRingClass: "focus:ring-green-500/50",
    overlayActive: "bg-gradient-to-b from-green-500/20 via-transparent to-transparent backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(0,255,150,0.3)]",
    borderActive: "border-green-400/30",
    labelClass: "absolute left-1/2 top-[15%] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider -translate-x-1/2 transition-all duration-300 px-2 text-center",
    labelActive: "text-green-300 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)] scale-105",
    label: "MID THIRD",
    ariaLabel: "Mid Third - click to learn more",
  },
  attacking: {
    positionClass: "absolute left-2/3 top-0 w-1/3 h-full z-10",
    roundedClass: "rounded-r-2xl",
    focusRingClass: "focus:ring-red-500/50",
    overlayActive: "bg-gradient-to-l from-red-500/20 via-transparent to-transparent backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(255,100,100,0.3)] border-l border-red-400/50",
    borderActive: "border-red-400/30 rounded-r-2xl",
    labelClass: "absolute left-1/2 top-[15%] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider -translate-x-1/2 transition-all duration-300 px-2 text-center",
    labelActive: "text-red-300 drop-shadow-[0_0_10px_rgba(255,100,100,0.7)] scale-105",
    label: "ATTACKING THIRD",
    ariaLabel: "Attacking Third - click to learn more",
  },
} as const;

export { zoneConfig };
