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
    icon: <Hammer className="w-5 h-5 text-secondary" />,
    stats: [
      { label: "Years Experience", value: "25+" },
      { label: "Projects", value: "150+" },
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
    icon: <Building2 className="w-5 h-5 text-secondary" />,
    stats: [
      { label: "Km Roads Built", value: "2,000+" },
      { label: "Infrastructure", value: "50+" },
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
    icon: <Globe className="w-5 h-5 text-secondary" />,
    stats: [
      { label: "Countries", value: "40+" },
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

  //   const handleMouseEnter = () => setIsPaused(true);
  //   const handleMouseLeave = () => {
  //     setIsPaused(false);
  //     startTimeRef.current = Date.now() - (progress / 100) * DURATION;
  //   };

  const currentSlide = SLIDES[current];

  return (
    <section className="relative w-full h-screen  overflow-hidden bg-primary font-display">
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-secondary transition-all duration-100 linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image & Ken Burns */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 10, ease: "linear" }}
              className="w-full h-full"
            >
              <img
                src={currentSlide.url}
                alt={currentSlide.title}
                className="w-full h-full object-cover brightness-[0.45]"
              />
            </motion.div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent z-10" />
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-5 md:py-[300px] lg:px-24">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5  bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                  {currentSlide.icon}
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/90">
                    {currentSlide.label}
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-16 tracking-tight">
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

                {/* Subtext with Border */}
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light border-l-2 border-secondary pl-6">
                  {currentSlide.sub}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="group px-8 py-4 bg-secondary hover:bg-white text-primary font-bold rounded-sm transition-all shadow-xl flex items-center gap-3 uppercase text-xs tracking-[0.2em]">
                    {currentSlide.primaryBtn}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white hover:text-primary text-white font-bold rounded-sm transition-all uppercase text-xs tracking-[0.2em]">
                    {currentSlide.secondaryBtn}
                  </button>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="hidden lg:block"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-8 max-w-sm ml-auto">
                  <div className="flex items-center gap-2 mb-6 text-secondary">
                    <TrendingUp size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Performance Metrics
                    </span>
                  </div>

                  <div className="space-y-6">
                    {currentSlide.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-end border-b border-white/10 pb-4"
                      >
                        <span className="text-white/60 text-sm">
                          {stat.label}
                        </span>
                        <span className="text-3xl font-bold text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-white/80">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm">ISO 9001:2015 Certified</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Slide Controls */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {[
          { icon: <ChevronLeft size={20} />, action: () => goTo(current - 1) },
          { icon: <ChevronRight size={20} />, action: () => goTo(current + 1) },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all backdrop-blur-sm group"
          >
            {btn.icon}
          </button>
        ))}
      </div>

      {/* Bottom Pagination & Trust Markers */}
      <div className="absolute bottom-12 left-8 md:left-16 md:bottom-0 lg:left-24 z-30 flex items-center gap-12">
        <div className="flex gap-3">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="group py-2">
              <div
                className={`h-[3px] transition-all duration-500 rounded-full ${
                  current === i
                    ? "w-12 bg-secondary"
                    : "w-6 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 text-white/40 text-sm">
          <span className="text-2xl text-white/80">0{current + 1}</span>
          <div className="w-12 h-px bg-white/20"></div>
          <span>0{SLIDES.length}</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 md:right-16 lg:right-24 z-30 hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
          <ShieldCheck size={16} className="text-secondary" />
          <span>Licensed & Regulated</span>
        </div>
        <div className="h-8 w-px bg-white/20" />
        <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
          <Globe size={16} className="text-secondary" />
          <span>Global Operations</span>
        </div>
      </div>
    </section>
  );
};

export default AGHero;
