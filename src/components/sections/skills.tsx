import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleInteraction = () => {
      setClickCount((prev) => prev + 1);
    };

    window.addEventListener("keyboard-press", handleInteraction);

    return () => {
      window.removeEventListener("keyboard-press", handleInteraction);
    };
  }, []);

  return (
    <section id="skills" className="relative w-full h-[200dvh] pointer-events-none">
      <div className="top-0 sticky h-[100dvh] flex flex-col items-center justify-between pt-8 sm:pt-12 md:pt-16 pb-8 md:pb-12 pointer-events-none">
        <Link href={"#skills"} className="pointer-events-auto">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-transparent font-display font-extrabold tracking-tight",
                "bg-gradient-to-b from-white via-white/95 to-slate-200 drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        {/* Mobile only hint - positioned higher for visibility */}
        <div className={cn(
          "md:hidden transition-all duration-1000 mb-32",
          clickCount < 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="font-mono text-xs tracking-[0.3em] text-white/70 animate-pulse uppercase bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            Tap keys to reveal skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
