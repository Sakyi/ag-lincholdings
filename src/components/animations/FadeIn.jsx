import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger the animation when the element is in view
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the first trigger
        }
      },
      {
        threshold: threshold || 0.1,
        rootMargin: "0px 0px -50px 0px", //Trigger a bit earlier or slightly before element is fully visible
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, isVisible]);
  {
    /* Mobile Menu Button */
  }
  return (
    <div
      ref={elementRef}
      className={isVisible ? "animate-fadeIn" : "opacity-0"}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: isVisible ? `${duration}ms` : "0ms",
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
