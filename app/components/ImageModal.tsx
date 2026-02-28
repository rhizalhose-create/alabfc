"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface ImageModalProps {
  readonly src: string;
  readonly alt: string;
  readonly onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (!el.open) el.showModal();

    const handleBackdropMouseDown = (e: MouseEvent) => {
      if (e.target === el) onClose();
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    el.addEventListener("mousedown", handleBackdropMouseDown);
    el.addEventListener("cancel", handleCancel);
    return () => {
      el.removeEventListener("mousedown", handleBackdropMouseDown);
      el.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 m-0 w-full h-full max-w-none max-h-none sm:m-auto sm:w-[90vw] sm:h-[90vh] sm:max-w-[90vw] sm:max-h-[90vh] bg-transparent border-none p-0 backdrop:bg-black/90 backdrop:backdrop-blur-md"
    >
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/80 hover:text-white text-2xl sm:text-3xl md:text-4xl focus:outline-none bg-black/50 hover:bg-black/70 w-11 h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200"
          aria-label="Close image"
        >
          ✕
        </button>
        <div className="relative w-full h-full max-w-6xl max-h-[calc(100vh-2rem)] sm:max-h-[85vh] mx-auto">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>
      </div>
    </dialog>
  );
}
