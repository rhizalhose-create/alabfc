"use client";

import Image from "next/image";

interface CoachesProfileModalProps {
  readonly onClose: () => void;
}

export function CoachesProfileModal({ onClose }: CoachesProfileModalProps) {
 
  const coaches = [
    {
      name: "Zeus Fabroada",
      role: "Head Coach",
      photo: "/coaches/Zeus.jpg",
      certifications: [
        "AFC 'B' Coaching License",
        "AFC 'C' Coaching License",
        "FIFA Youth Elite Coaching Course",
      ],
    },
    {
      name: "Neil Jose",
      role: "Assistant Coach",
      photo: "/coaches/neil.jpg",
      certifications: [
        "PFF 'B' Coaching License",
        "AFC 'C' Coaching License",
        "AFC Fitness Level A1 Coaching Course",
        "MaEd. in Physical Education",
      ],
    },
    {
      name: "Jeferson Agato",
      role: "Coaching Staff",
      photo: "/coaches/jeferson.jpg",
      certifications: [
        "AFC 'C' Coaching License",
        "Head Coach: PFF U19 Boys National Championships 2026 Qualifier (Laguna RFA)",
        "PFF-Center of Development Workshops",
      ],
    },
    {
      name: "Angelica Vida",
      role: "Coaching Staff",
      photo: "/coaches/angelica.jpg",
      certifications: [
        "PFF 'C' Coaching License",
        "PFF-Center of Development Workshops",
        "LRFA Basic Goalkeeping Course",
      ],
    },
    {
      name: "Sean Corpuz",
      role: "Coaching Staff",
      photo: "/coaches/sean.jpg",
      certifications: [
        "PFF 'C' Coaching License",
        "PFF 'D' Coaching License",
        "Analyst for G8 Academy",
      ],
    },
    {
      name: "Aaron Ramos",
      role: "Strength & Conditioning Coach",
      photo: "/coaches/aaron.jpg",
      certifications: [
        "PFF 'D' Coaching License",
        "BS in Exercise & Sports Science",
        "Club General-Secretary",
        "Youth Development (S&C, Sports Psychology) Workshops",
      ],
    },
    {
      name: "JB Perilla",
      role: "Coaching Staff",
      photo: "/coaches/jb.jpg",
      certifications: ["PFF 'D' Coaching License"],
    },
    {
      name: "Lara Gorosin",
      role: "Coaching Staff",
      photo: "/coaches/lara.jpg",
      certifications: ["PFF 'D' Coaching License"],
    },
    {
      name: "Jennah Joven",
      role: "Administrative Staff",
      photo: "/coaches/jennah.jpg",
      certifications: [
        "PFF 'D' Coaching License",
        "Club Asst. Admin",
        "PFF-Center of Development Workshops",
        "LRFA Basic Goalkeeping Course",
      ],
    },
    {
      name: "Fae Portugal",
      role: "Coaching Staff",
      photo: "/coaches/fae.jpg",
      certifications: [],
    },
    {
      name: "Myzcent Cepeda",
      role: "Coaching Staff",
      photo: "/coaches/myzcent.jpg",
      certifications: [],
    },
    {
      name: "Franz Del Rosario",
      role: "Coaching Staff",
      photo: "/coaches/franz.jpg",
      certifications: [],
    },
    {
      name: "Anton De Guzman",
      role: "Coaching Staff",
      photo: "/coaches/anton.jpg",
      certifications: [],
    },
    {
      name: "JV Limuaco",
      role: "Coaching Staff",
      photo: "/coaches/jv.jpg",
      certifications: [],
    },
    {
      name: "Kasser Flores",
      role: "Coaching Staff",
      photo: "/coaches/kasser.jpg",
      certifications: [],
    },
    {
      name: "Miguel Perilla",
      role: "Coaching Staff",
      photo: "/coaches/miguel.jpg",
      certifications: [],
    },
  ];

  const getCoachEmoji = (index: number): string => {
    if (index === 0) return "👨‍🏫"; // Head Coach
    if (index === 5) return "💪"; // Strength & Conditioning
    if (index === 8) return "👩‍💼"; // Admin
    return "⚽";
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050810] overflow-y-auto">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .glass-card {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .hover-lift {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#050810] via-[#0f172a] to-[#0c1222]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(56,189,248,0.06),transparent_70%)]" />

      {/* Sticky header */}
      <header className="sticky top-0 z-10 flex items-center justify-between gap-1.5 px-1.5 xs:px-3 sm:px-4 md:px-8 py-2 xs:py-3 sm:py-4 glass-card border-b border-white/[0.06]">
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm xs:text-base sm:text-lg tracking-wide">Coaching Staff</p>
          <p className="text-white/45 text-[9px] xs:text-[10px] tracking-wide font-light">Meet the mentors behind ALAB FC</p>
        </div>
        <button
          onClick={onClose}
          className="min-h-[36px] xs:min-h-[40px] min-w-[36px] xs:min-w-[40px] sm:min-w-0 px-1.5 xs:px-3 py-1 xs:py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white/90 hover:text-white transition-all duration-300 text-[10px] xs:text-[11px] font-medium flex items-center justify-center gap-1 xs:gap-1.5 group flex-shrink-0"
        >
          <svg
            className="w-3 xs:w-3.5 h-3 xs:h-3.5 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="hidden xs:inline">Back</span>
        </button>
      </header>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-1.5 xs:px-3 sm:px-4 md:px-8 py-4 xs:py-6 sm:py-8 md:py-12">
        {/* Intro Section */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <div className="text-center animate-up delay-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight px-1.5">
              Our Coaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300">Excellence</span>
            </h1>
            <p className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-1.5">
              <span className="text-sky-400 font-bold">AFC Licensed Coaches</span> are employed by the Club to ensure that players learn standard football skills and techniques. Our coaching staff brings decades of combined experience and a passion for developing the next generation of football talent.
            </p>
          </div>
        </section>

        {/* Coaches Grid */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-5">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className="group glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-sky-500/40 transition-all duration-300 hover-lift animate-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s`, opacity: 0 }}
              >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden border-2 sm:border-[2px] border-sky-500/30 group-hover:border-sky-400/60 transition-all duration-300">
                <Image
                  src={coach.photo}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 640px) 5rem, (max-width: 1024px) 6rem, 7rem"
                  className="object-cover p-0 transition-transform duration-300 group-hover:scale-110"
                  priority={index < 3} // Prioritize first 3 images for faster loading
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
                  {getCoachEmoji(index)}
                </div>
              </div>
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl text-center mb-0.5 sm:mb-1">
                  {coach.name}
                </h3>
                <p className="text-sky-400 text-sm sm:text-base font-semibold text-center mb-1.5 sm:mb-2">
                  {coach.role}
                </p>
                <div className="border-t border-white/10 pt-2 sm:pt-3">
                  {coach.certifications.length > 0 ? (
                    <ul className="text-white/70 text-[10px] sm:text-xs space-y-0.5 sm:space-y-1">
                      {coach.certifications.map((cert) => (
                        <li key={cert} className="flex gap-2 items-start">
                          <span className="text-sky-400 mt-1 flex-shrink-0">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/50 text-[10px] sm:text-xs text-center italic">
                      Coaching Staff
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-indigo-500/5 px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                Professional Development Through Quality Coaching
              </h2>
              <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
                Every coach at ALAB FC is committed to developing not just skilled players, but principled individuals who embody our core values of discipline, excellence, and sportsmanship.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
