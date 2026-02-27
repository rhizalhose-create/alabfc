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
      className="fixed m-auto w-[90vw] h-[90vh] bg-transparent border-none p-0 backdrop:bg-black/90 backdrop:backdrop-blur-md"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white/80 hover:text-white text-4xl focus:outline-none bg-black/50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-black/70"
          aria-label="Close image"
        >
          ✕
        </button>
        <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </dialog>
  );
}
