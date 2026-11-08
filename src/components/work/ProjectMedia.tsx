"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Maximize2,
} from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex,
  projectTitle,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Synchronize index when reopened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleNext = useCallback(() => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleToggleZoom = () => {
    setZoomLevel((prev) => (prev > 1 ? 1 : 2));
  };

  // Keyboard navigation & controls
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "+":
        case "=":
          setZoomLevel((prev) => Math.min(prev + 0.5, 3));
          break;
        case "-":
        case "_":
          setZoomLevel((prev) => Math.max(prev - 0.5, 1));
          break;
        case "0":
        case "r":
        case "R":
          setZoomLevel(1);
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const isZoomed = zoomLevel > 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xl select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget && !isZoomed) {
            onClose();
          }
        }}
      >
        {/* Top Control Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
          {/* Title & Index Counter */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold">
              {projectTitle}
            </span>
            <span className="text-white/30">&bull;</span>
            <span className="font-mono text-xs text-white/70">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Zoom & Action Controls */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white font-mono text-xs">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                aria-label="Zoom Out"
                className="p-1 rounded hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleToggleZoom}
                className="px-2 py-0.5 rounded hover:bg-white/15 transition-colors font-semibold tracking-wider text-[11px]"
                title="Click to toggle 1x / 2x zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                aria-label="Zoom In"
                className="p-1 rounded hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              {isZoomed && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  title="Reset Zoom (0 / R)"
                  className="p-1 rounded hover:bg-white/15 text-white/70 hover:text-white transition-colors ml-1 border-l border-white/15 pl-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Viewport with Image */}
        <div className="relative flex-1 w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-4 sm:left-6 z-20 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-4 sm:right-6 z-20 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Interactive Zoomable Image Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <motion.div
              key={`${currentImage}-${zoomLevel}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: zoomLevel, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              drag={isZoomed}
              dragConstraints={{
                left: -200 * (zoomLevel - 1),
                right: 200 * (zoomLevel - 1),
                top: -150 * (zoomLevel - 1),
                bottom: 150 * (zoomLevel - 1),
              }}
              dragElastic={0.05}
              onClick={handleToggleZoom}
              className={`relative max-w-full max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center ${
                isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
              }`}
            >
              {/* Image using native img inside lightbox for responsive zoom without next/image container constraints */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage}
                alt={`${projectTitle} preview ${currentIndex + 1}`}
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl pointer-events-none"
                style={{
                  maxWidth: "92vw",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip & Keyboard Hint */}
        <div className="relative z-10 px-6 py-3 border-t border-white/10 bg-black/50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Thumbnails Row */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setZoomLevel(1);
                  setCurrentIndex(idx);
                }}
                className={`relative w-14 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  idx === currentIndex
                    ? "border-[#FF6A1A] scale-105 shadow-[0_0_12px_rgba(255,106,26,0.5)]"
                    : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard Shortcuts Hint */}
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-white/50">
            <span>&larr; &rarr; Navigate</span>
            <span>&bull;</span>
            <span>+ / - Zoom</span>
            <span>&bull;</span>
            <span>Click to Toggle</span>
            <span>&bull;</span>
            <span>Esc to Close</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------
// 1. Hero Zoomable Image Component
// ---------------------------------------------------------
export function ProjectHeroMedia({
  thumbnail,
  title,
  gallery,
}: {
  thumbnail: string;
  title: string;
  gallery: string[];
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Combine thumbnail and gallery deduplicated
  const allImages = React.useMemo(() => {
    const combined = [thumbnail, ...(gallery || [])];
    return Array.from(new Set(combined));
  }, [thumbnail, gallery]);

  return (
    <>
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] mb-16 sm:mb-24 shadow-2xl cursor-zoom-in"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        {/* Hover Zoom Overlay Banner */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize2 className="w-3.5 h-3.5 text-[#FF6A1A]" />
            <span>Click to Zoom & Inspect</span>
          </div>
        </div>

        {/* Floating Zoom Indicator Pill */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5 text-[#FF6A1A]" />
          <span>Zoom Available</span>
        </div>
      </div>

      <ImageLightbox
        images={allImages}
        initialIndex={0}
        projectTitle={title}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}

// ---------------------------------------------------------
// 2. Screenshot Gallery Section Component
// ---------------------------------------------------------
export function ProjectGallerySection({
  gallery,
  title,
  thumbnail,
}: {
  gallery: string[];
  title: string;
  thumbnail: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // All images combined for the gallery
  const allImages = React.useMemo(() => {
    const list = gallery && gallery.length > 0 ? gallery : [thumbnail];
    return Array.from(new Set(list));
  }, [gallery, thumbnail]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            <span className="text-[var(--accent)] font-bold">06</span>
            <span>&bull;</span>
            <span>INTERFACE TELEMETRY</span>
          </div>
          <span className="font-mono text-[11px] text-[var(--muted)] flex items-center gap-1">
            <ZoomIn className="w-3 h-3 text-[var(--accent)]" />
            <span>Click any screenshot to zoom</span>
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
          SCREENSHOT GALLERY ({allImages.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {allImages.map((imgUrl, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedIndex(i);
                setLightboxOpen(true);
              }}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] shadow-sm cursor-zoom-in hover:border-[var(--accent)]/50 transition-colors"
            >
              <Image
                src={imgUrl}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              {/* Hover Zoom Cue */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-250">
                  <ZoomIn className="w-3.5 h-3.5 text-[#FF6A1A]" />
                  <span>Inspect Screenshot</span>
                </div>
              </div>

              {/* Index Number Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 backdrop-blur-sm border border-white/10 font-mono text-[10px] text-white">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImageLightbox
        images={allImages}
        initialIndex={selectedIndex}
        projectTitle={title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
