import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = (
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
) => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const animatlionClasses = {
    fadeUp: isVisible ? "animate-fadeUp" : "opacity-0 translate-y-8",
    fadeIn: isVisible ? "animate-fadeIn" : "opacity-0",
    slideLeft: isVisible ? "animate-slideLeft" : "opacity-0 -translate-x-12",
    slideRight: isVisible ? "animate-slideRight" : "opacity-0 translate-x-12",
    scaleIn: isVisible ? "animate-scaleIn" : "opacity-0 scale-90",
  };

  // const visibleClasses = animatlionClasses[animation] || animatlionClasses['fadeUp'];
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? visibleClasses : animatlionClasses[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
