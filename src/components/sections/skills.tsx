import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setShowHint(false);
    };

    window.addEventListener("keyboard-press", handleInteraction);

    return () => {
      window.removeEventListener("keyboard-press", handleInteraction);
    };
  }, []);

  return (
    <section id="skills" className="w-full h-[120dvh] md:h-[150dvh] pointer-events-none">
      <div className="top-16 sticky h-[80vh] flex flex-col items-center justify-between py-12 pointer-events-none">
        <Link href={"#skills"} className="pointer-events-auto">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-white/90 to-white/60",
                "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/60"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        {/* Mobile only hint - positioned below center */}
        <div className={cn(
          "md:hidden transition-opacity duration-1000",
          showHint ? "opacity-100" : "opacity-0"
        )}>
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 animate-pulse uppercase">
            Tap a key to reveal skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
