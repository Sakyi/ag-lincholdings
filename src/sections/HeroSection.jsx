import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Globe,
  Building2,
  Hammer,
  TrendingUp,
  Award,
} from "lucide-react";

const SLIDES = [
  {
    type: "image",
    url: "https://kimi-web-img.moonshot.cn/img/discoveryalert.com.au/f35805d2f5a525aca14f097038b1623527326c2b.jpg",
    label: "Resource Management",
    title: "Strategic Excellence in Mining & Resources",
    sub: "Expertise in gold, bauxite, and manganese extraction with a commitment to environmental sustainability and operational excellence.",
    primaryBtn: "Our Expertise",
    secondaryBtn: "Partner With Us",
    icon: <Hammer className="w-4 h-4 text-secondary" />,
    stats: [
      { label: "Years Experience", value: "25+" },
      { label: "Projects Completed", value: "150+" },
    ],
  },
  {
    type: "image",
    url: "https://kimi-web-img.moonshot.cn/img/www.afdb.org/000da26e42bd2c1618d5cbe1dfedec8f2e0aad96.jpg",
    label: "Infrastructure",
    title: "Building Ghana's Modern Backbone",
    sub: "Delivering world-class road networks and structural engineering solutions through AG-LINC Associates with precision and integrity.",
    primaryBtn: "Civil Projects",
    secondaryBtn: "Inquire Now",
    icon: <Building2 className="w-4 h-4 text-secondary" />,
    stats: [
      { label: "Km Roads Built", value: "2,000+" },
      { label: "Infrastructure Projects", value: "50+" },
    ],
  },
  {
    type: "image",
    url: "https://kimi-web-img.moonshot.cn/img/porta-stor.com/eddb67bfa1a681373ceb0b0f972f51d9c95760d7.jpg",
    label: "International Trade",
    title: "Connecting Local Markets to the World",
    sub: "Robust import, export, and financial management services driving Ghana's economic growth across global markets.",
    primaryBtn: "Trade Services",
    secondaryBtn: "Contact Us",
    icon: <Globe className="w-4 h-4 text-secondary" />,
    stats: [
      { label: "Countries Served", value: "40+" },
      { label: "Trade Volume", value: "$500M+" },
    ],
  },
];

const DURATION = 8000;

const AGHero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef(Date.now());

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(newProgress);
      if (newProgress >= 100) {
        goTo(current + 1);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [current, goTo, isPaused]);

  const currentSlide = SLIDES[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-primary font-display">
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-50">
        <div
          className="h-full bg-secondary transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.12 }}
              transition={{ duration: 10, ease: "linear" }}
              className="w-full h-full"
            >
              <img
                src={currentSlide.url}
                alt={currentSlide.title}
                className="w-full h-full object-cover brightness-[0.4]"
              />
            </motion.div>
            {/* Layered gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent z-10" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-28 sm:pb-24 sm:justify-center px-6 sm:px-10 lg:px-20 xl:px-28">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-5 sm:space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full w-fit">
                  {currentSlide.icon}
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                    {currentSlide.label}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-xl lg:max-w-none">
                  {currentSlide.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={
                        /Mining|Modern|World|Excellence/.test(word)
                          ? "text-secondary italic"
                          : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h1>

                {/* Subtext */}
                <p className="text-sm sm:text-base lg:text-lg text-white/65 leading-relaxed max-w-lg font-light border-l-2 border-secondary pl-5">
                  {currentSlide.sub}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-secondary hover:bg-white text-primary font-bold rounded-sm transition-all shadow-lg flex items-center gap-2.5 uppercase text-[10px] sm:text-xs tracking-[0.18em]">
                    {currentSlide.primaryBtn}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border border-white/25 hover:bg-white hover:text-primary text-white font-bold rounded-sm transition-all uppercase text-[10px] sm:text-xs tracking-[0.18em]">
                    {currentSlide.secondaryBtn}
                  </button>
                </div>
              </motion.div>

              {/* Right: Stats Card — desktop only */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="hidden lg:flex justify-end"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-7 xl:p-9 w-full max-w-[320px] xl:max-w-[360px]">
                  <div className="flex items-center gap-2 mb-6 text-secondary">
                    <TrendingUp size={18} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                      Performance Metrics
                    </span>
                  </div>

                  <div className="space-y-5">
                    {currentSlide.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-end border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <span className="text-white/50 text-sm leading-tight max-w-[140px]">
                          {stat.label}
                        </span>
                        <span className="text-3xl xl:text-4xl font-bold text-white tabular-nums">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2.5 text-white/60">
                    <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-xs">ISO 9001:2015 Certified</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next — vertical stack on right, vertically centred */}
      <div className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {[
          {
            icon: <ChevronLeft size={18} />,
            action: () => goTo(current - 1),
            label: "Previous",
          },
          {
            icon: <ChevronRight size={18} />,
            action: () => goTo(current + 1),
            label: "Next",
          },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            aria-label={btn.label}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all backdrop-blur-sm"
          >
            {btn.icon}
          </button>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 sm:px-10 lg:px-20 xl:px-28 pb-7 sm:pb-8 flex items-end justify-between gap-4">
        {/* Slide dots + counter */}
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group py-2"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className={`h-[3px] transition-all duration-500 rounded-full ${
                    current === i
                      ? "w-10 bg-secondary"
                      : "w-5 bg-white/25 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-white/40 text-sm">
            <span className="text-xl sm:text-2xl font-light text-white/70 tabular-nums">
              0{current + 1}
            </span>
            <div className="w-8 h-px bg-white/20" />
            <span className="tabular-nums">0{SLIDES.length}</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-white/45 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-secondary flex-shrink-0" />
            <span>Licensed & Regulated</span>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <div className="flex items-center gap-2 text-white/45 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <Globe size={14} className="text-secondary flex-shrink-0" />
            <span>Global Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AGHero;
