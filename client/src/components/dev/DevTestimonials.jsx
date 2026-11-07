import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { devData } from "@/data/devData";

export default function DevTestimonials() {
  const { testimonials } = devData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 border-b border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            05 &bull; SOCIAL PROOF
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            CLIENT ENDORSEMENTS
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-border bg-surface hover:bg-[#EAE3D5] text-text flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-border bg-surface hover:bg-[#EAE3D5] text-text flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Card */}
      <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-surface border border-border shadow-sm overflow-hidden">
        <Quote className="absolute top-6 right-8 w-24 h-24 text-border/40 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl relative z-10"
          >
            <div className="flex items-center gap-1 text-accent mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl text-text font-serif italic leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-accent"
              />
              <div>
                <h4 className="font-display text-xl uppercase tracking-wide text-text font-bold">
                  {current.author}
                </h4>
                <p className="font-mono text-xs text-muted">
                  {current.title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border/80">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? "w-8 bg-accent" : "w-2 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
