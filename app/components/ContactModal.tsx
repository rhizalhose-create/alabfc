"use client";

import { useEffect, useRef } from "react";

interface ContactModalProps {
  readonly onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
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

  const contacts = [
    {
      label: "Facebook",
      value: "Alab Football Club",
      href: "https://www.facebook.com/alabfootballclub",
      icon: (
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-800",
      border: "border-blue-500/40",
      textColor: "text-blue-400",
    },
    {
      label: "Phone",
      value: "+63 919 084 1668",
      href: "tel:+639190841668",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-700",
      border: "border-emerald-500/40",
      textColor: "text-emerald-400",
    },
    {
      label: "Email",
      value: "alabfootballclubclinic@gmail.com",
      href: "mailto:alabfootballclubclinic@gmail.com",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      color: "from-sky-500 to-sky-700",
      border: "border-sky-500/40",
      textColor: "text-sky-400",
    },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed m-auto w-[90%] max-w-md bg-gradient-to-br from-[#1a2332] to-[#0f1420] border-4 border-white/10 rounded-3xl p-8 shadow-[0_0_70px_rgba(0,150,255,0.4)] backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 text-white/60 hover:text-white text-3xl focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1"
          aria-label="Close contact modal"
        >
          ✕
        </button>
        <h2
          id="contact-modal-title"
          className="text-3xl font-bold text-white mb-1 tracking-wide"
        >
          Contact Us
        </h2>
        <p className="text-white/40 text-sm mb-6 tracking-wider">
          Get in touch with Alab FC
        </p>
        <div className="flex flex-col gap-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl border ${c.border} bg-white/5 hover:bg-white/10 transition-all duration-200 group`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
              >
                {c.icon}
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xs font-semibold tracking-widest uppercase ${c.textColor}`}
                >
                  {c.label}
                </span>
                <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">
                  {c.value}
                </span>
              </div>
              <svg
                className="w-4 h-4 text-white/20 group-hover:text-white/60 ml-auto transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </dialog>
  );
}
