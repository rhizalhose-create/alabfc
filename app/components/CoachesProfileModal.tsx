"use client";

interface CoachesProfileModalProps {
  readonly onClose: () => void;
}

export function CoachesProfileModal({ onClose }: CoachesProfileModalProps) {
  // Sample coach data
  const coaches = [
    {
      name: "Coach Juan Dela Cruz",
      role: "Head Coach",
      experience: "UEFA B License · 15 years experience",
      specialty: "Tactical Development & Youth Formation",
    },
    {
      name: "Coach Maria Santos",
      role: "Assistant Coach",
      experience: "AFC B License · 10 years experience",
      specialty: "Goalkeeping & Defensive Organization",
    },
    {
      name: "Coach Jose Rizal",
      role: "Fitness Coach",
      experience: "NASM Certified · 8 years experience",
      specialty: "Strength & Conditioning",
    },
  ];

  const getCoachEmoji = (index: number): string => {
    switch (index) {
      case 0:
        return "👨‍🏫";
      case 1:
        return "👩‍🏫";
      default:
        return "👨‍⚕️";
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#070c17] overflow-y-auto">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .glass-card {
          background: rgba(18, 25, 40, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .hover-lift {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f1a2a] to-[#1a2639]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(56,189,248,0.08),transparent_70%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(99,102,241,0.05),transparent_70%)]" />

      {/* Sticky header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 glass-card border-b border-white/[0.03]">
        <div>
          <p className="text-white font-bold text-xl tracking-wide">COACHING STAFF</p>
          <p className="text-white/40 text-xs tracking-wider font-light">Meet the mentors behind ALAB FC</p>
        </div>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white transition-all duration-200 text-sm font-medium backdrop-blur-sm flex items-center gap-2 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
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
          Back
        </button>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Intro Section */}
        <section className="mb-20">
          <div className="text-center animate-up delay-1">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Coaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300">Excellence</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <span className="text-sky-400 font-bold">AFC Licensed Coaches</span> are employed by the Club to ensure that players learn standard football skills and techniques. Our coaching staff brings decades of combined experience and a passion for developing the next generation of football talent.
            </p>
          </div>
        </section>

        {/* Coaches Grid */}
        <section className="mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className="group glass-card rounded-3xl p-8 hover:border-sky-500/40 transition-all duration-300 hover-lift animate-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s`, opacity: 0 }}
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center overflow-hidden border-3 border-sky-500/30 group-hover:border-sky-400/60 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {getCoachEmoji(index)}
                  </div>
                </div>
                <h3 className="text-white font-bold text-2xl text-center mb-2">
                  {coach.name}
                </h3>
                <p className="text-sky-400 text-lg font-semibold text-center mb-3">
                  {coach.role}
                </p>
                <div className="border-t border-white/10 pt-4 mb-4">
                  <p className="text-white/50 text-sm text-center mb-3">
                    {coach.experience}
                  </p>
                  <p className="text-white/40 text-sm text-center italic">
                    "{coach.specialty}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-indigo-500/5 px-8 py-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Professional Development Through Quality Coaching
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Every coach at ALAB FC is committed to developing not just skilled players, but principled individuals who embody our core values of discipline, excellence, and sportsmanship.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
