const zoneConfig = {
  defensive: {
    positionClass: "absolute left-0 right-0 top-0 w-full h-1/3 z-10",
    roundedClass: "rounded-t-2xl",
    focusRingClass: "focus:ring-sky-500/50",
    overlayActive: "bg-gradient-to-b from-sky-500/20 via-transparent to-transparent backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(0,200,255,0.3)] border-b border-sky-400/50",
    borderActive: "border-sky-400/30 rounded-t-2xl",
    labelClass: "absolute -left-0 top-1/2 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest xs:tracking-wider -translate-y-1/2 transition-all duration-300 px-1 xs:px-2 text-center leading-tight whitespace-nowrap",
    labelActive: "text-sky-300 drop-shadow-[0_0_10px_rgba(0,200,255,0.7)] scale-105",
    label: "DEFENSIVE THIRD",
    ariaLabel: "Defensive Third - click to learn more",
  },
  mid: {
    positionClass: "absolute left-0 right-0 top-1/3 w-full h-1/3 z-10",
    roundedClass: "rounded-none",
    focusRingClass: "focus:ring-green-500/50",
    overlayActive: "bg-green-500/15 backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(0,255,150,0.4)] border-y border-green-400/40",
    borderActive: "border-green-400/30",
    labelClass: "absolute -left-0 top-1/2 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest xs:tracking-wider -translate-y-1/2 transition-all duration-300 px-1 xs:px-2 text-center leading-tight whitespace-nowrap",
    labelActive: "text-green-300 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)] scale-105",
    label: "MIDDLE THIRD",
    ariaLabel: "Middle Third - click to learn more",
  },
  attacking: {
    positionClass: "absolute left-0 right-0 bottom-0 w-full h-1/3 z-10",
    roundedClass: "rounded-b-2xl",
    focusRingClass: "focus:ring-red-500/50",
    overlayActive: "bg-gradient-to-t from-red-500/20 via-transparent to-transparent backdrop-brightness-125 shadow-[inset_0_0_30px_rgba(255,100,100,0.3)] border-t border-red-400/50",
    borderActive: "border-red-400/30 rounded-b-2xl",
    labelClass: "absolute -left-0 top-1/2 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest xs:tracking-wider -translate-y-1/2 transition-all duration-300 px-1 xs:px-2 text-center leading-tight whitespace-nowrap",
    labelActive: "text-red-300 drop-shadow-[0_0_10px_rgba(255,100,100,0.7)] scale-105",
    label: "ATTACKING THIRD",
    ariaLabel: "Attacking Third - click to learn more",
  },
} as const;

export { zoneConfig };
