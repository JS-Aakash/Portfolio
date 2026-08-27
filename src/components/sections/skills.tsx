import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setTapped(true);
    };

    window.addEventListener("keyboard-press", handleInteraction);

    return () => {
      window.removeEventListener("keyboard-press", handleInteraction);
    };
  }, []);

  return (
    <section id="skills" className="relative w-full h-[200vh] pointer-events-none">
      <div className="top-0 sticky h-screen w-full flex flex-col items-center justify-between pt-10 sm:pt-14 md:pt-16 pb-12 pointer-events-none">
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

        {/* Mobile only hint - sticky at the bottom until key is tapped */}
        <div
          className={cn(
            "md:hidden transition-all duration-700 pb-8 pointer-events-auto",
            !tapped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-white/90 uppercase bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] animate-pulse">
            Tap keys to reveal skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
