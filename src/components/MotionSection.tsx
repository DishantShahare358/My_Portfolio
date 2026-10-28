"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  variant?: "up" | "left" | "right";
  immediate?: boolean;
};

export function MotionSection({ children, variant = "up", immediate = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => el.classList.add("in-view");
    if (immediate) reveal();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) reveal();
    return () => io.disconnect();
  }, [immediate]);

  const side = variant === "left" ? "from-left" : variant === "right" ? "from-right" : "";

  return (
    <div ref={ref} className={`scene-3d ${side}`}>
      {children}
    </div>
  );
}
