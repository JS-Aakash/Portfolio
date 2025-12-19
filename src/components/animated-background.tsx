"use client";
import React, { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 700, y: -400, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 100, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 400, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

type Section = "hero" | "about" | "skills" | "projects" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [splineApp, setSplineApp] = useState<Application>();
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const router = useRouter();

  const keyboardStates = useCallback((section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  }, [isMobile]);

  const handleAction = useCallback((e: SplineEvent) => {
    if (!splineApp || !e.target) return;
    const name = e.target.name;

    console.log(`%c Spline Interaction on ${name}`, 'background: #222; color: #bada55');

    let skill: Skill | undefined = SKILLS[name as SkillNames];
    if (!skill) {
      const key = (Object.keys(SKILLS) as SkillNames[]).find(k =>
        name.toLowerCase().includes(k.toLowerCase())
      );
      if (key) skill = SKILLS[key];
    }

    if (skill) {
      console.log(`%c MATCH FOUND: ${skill.label}`, 'font-weight: bold; color: cyan');
      if (isMobile) {
        window.dispatchEvent(new CustomEvent("keyboard-press", { detail: skill }));
      }
      splineApp.setVariable("heading", skill.label);
      splineApp.setVariable("desc", skill.shortDescription);
    }
  }, [splineApp]);

  useEffect(() => {
    if (!splineApp) return;

    console.log("AnimatedBackground: Setting up Spline event listeners");

    const handleUp = () => {
      if (splineApp) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    };

    splineApp.addEventListener("mouseDown", handleAction);
    splineApp.addEventListener("mouseHover", handleAction);
    splineApp.addEventListener("keyDown", handleAction);
    splineApp.addEventListener("mouseUp", handleUp);
    splineApp.addEventListener("keyUp", handleUp);

    return () => {
      if (splineApp) {
        splineApp.removeEventListener("mouseDown", handleAction);
        splineApp.removeEventListener("mouseHover", handleAction);
        splineApp.removeEventListener("keyDown", handleAction);
        splineApp.removeEventListener("mouseUp", handleUp);
        splineApp.removeEventListener("keyUp", handleUp);
      }
    };
  }, [splineApp, handleAction]);

  useEffect(() => {
    if (!splineApp || isLoading || keyboardRevealed) return;

    (async () => {
      const kbd = splineApp.findObjectByName("keyboard");
      if (!kbd) return;

      kbd.visible = true;
      setKeyboardRevealed(true);

      const all = splineApp.getAllObjects();
      const mobileKeys = all.filter(o => o.name === "keycap-mobile");
      const desktopKeys = all.filter(o => o.name === "keycap-desktop");
      const baseKeys = all.filter(o => o.name === "keycap");

      baseKeys.forEach(o => o.visible = false);
      mobileKeys.forEach(o => o.visible = isMobile);
      desktopKeys.forEach(o => o.visible = !isMobile);

      baseKeys.forEach(async (k, i) => {
        await sleep(i * 50);
        k.visible = true;
        gsap.fromTo(k.position, { y: 200 }, { y: 50, duration: 0.5, ease: "bounce.out" });
      });
    })();
  }, [splineApp, isLoading, isMobile, keyboardRevealed]);

  useEffect(() => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    ["hero", "about", "skills", "projects", "contact"].forEach((s) => {
      ScrollTrigger.create({
        trigger: `#${s}`,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          setActiveSection(s as Section);
          gsap.to(kbd.scale, { ...keyboardStates(s as Section).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(s as Section).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(s as Section).rotation, duration: 1 });
        },
        onEnterBack: () => {
          setActiveSection(s as Section);
          gsap.to(kbd.scale, { ...keyboardStates(s as Section).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(s as Section).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(s as Section).rotation, duration: 1 });
        }
      });
    });
  }, [splineApp, keyboardStates]);

  useEffect(() => {
    if (!splineApp) return;
    const isSkills = activeSection === "skills";
    const textNames = ["text-desktop-dark", "text-desktop", "text-mobile-dark", "text-mobile"];
    textNames.forEach(n => {
      const o = splineApp.findObjectByName(n);
      if (o) o.visible = false;
    });

    const targetMode = theme === "dark" ? (isMobile ? "text-mobile" : "text-desktop") : (isMobile ? "text-mobile-dark" : "text-desktop-dark");
    const obj = splineApp.findObjectByName(targetMode);
    if (obj) obj.visible = isSkills;
  }, [theme, splineApp, isMobile, activeSection]);

  useEffect(() => {
    const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    router.push("/" + hash, { scroll: false });
  }, [activeSection, router]);

  return (
    <div className="w-full h-full relative" style={{ touchAction: "none" }}>
      <Suspense fallback={<div className="flex items-center justify-center h-full text-white">Loading...</div>}>
        <Spline
          style={{ touchAction: "none" }}
          onLoad={(app) => {
            console.log("AnimatedBackground: Spline LOAD Success");
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/skills_keyboard.spline"
        />
      </Suspense>
    </div>
  );
};

export default AnimatedBackground;
