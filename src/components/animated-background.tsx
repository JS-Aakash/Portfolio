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
  const [bongoAnimation, setBongoAnimation] = useState<{ start: () => void; stop: () => void }>();
  const [keycapAnimations, setKeycapAnimations] = useState<{ start: () => void; stop: () => void }>();
  const router = useRouter();

  const keyboardStates = useCallback((section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  }, [isMobile]);
  const lastDispatchTime = useRef<number>(0);

  // Unified Interaction Handler
  const handleAction = useCallback((e: SplineEvent) => {
    if (!splineApp || !e.target || activeSection !== "skills") return;
    const now = Date.now();

    // Throttle dispatches to once per 500ms to prevent duplicates from overlapping events
    if (now - lastDispatchTime.current < 500) return;

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
      lastDispatchTime.current = now;
      console.log(`%c MATCH FOUND: ${skill.label}`, 'font-weight: bold; color: cyan');
      if (isMobile) {
        window.dispatchEvent(new CustomEvent("keyboard-press", { detail: skill }));
      }
      splineApp.setVariable("heading", skill.label);
      splineApp.setVariable("desc", skill.shortDescription);
    }
  }, [splineApp, isMobile, activeSection]);



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

    ["hero", "about", "skills", "projects", "contact"].forEach((s, idx) => {
      ScrollTrigger.create({
        trigger: `#${s}`,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          setActiveSection(s as Section);
          window.dispatchEvent(new CustomEvent("clear-falling-skills"));
          gsap.to(kbd.scale, { ...keyboardStates(s as Section).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(s as Section).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(s as Section).rotation, duration: 1 });
        },
        onLeave: () => {
          window.dispatchEvent(new CustomEvent("clear-falling-skills"));
        },
        onEnterBack: () => {
          setActiveSection(s as Section);
          window.dispatchEvent(new CustomEvent("clear-falling-skills"));
          gsap.to(kbd.scale, { ...keyboardStates(s as Section).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(s as Section).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(s as Section).rotation, duration: 1 });
        },
        onLeaveBack: () => {
          window.dispatchEvent(new CustomEvent("clear-falling-skills"));
          if (idx > 0) {
            const prev = ["hero", "about", "skills", "projects", "contact"][idx - 1] as Section;
            setActiveSection(prev);
            gsap.to(kbd.scale, { ...keyboardStates(prev).scale, duration: 1 });
            gsap.to(kbd.position, { ...keyboardStates(prev).position, duration: 1 });
            gsap.to(kbd.rotation, { ...keyboardStates(prev).rotation, duration: 1 });
          }
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

  const getBongoAnimation = useCallback(() => {
    if (!splineApp) return { start: () => { }, stop: () => { } };
    const framesParent = splineApp.findObjectByName("bongo-cat");
    const frame1 = splineApp.findObjectByName("frame-1");
    const frame2 = splineApp.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent)
      return { start: () => { }, stop: () => { } };

    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        if (i % 2) {
          frame1.visible = false;
          frame2.visible = true;
        } else {
          frame1.visible = true;
          frame2.visible = false;
        }
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frame1.visible = false;
      frame2.visible = false;
    };
    return { start, stop };
  }, [splineApp]);

  const getKeycapsAnimation = useCallback(() => {
    if (!splineApp) return { start: () => { }, stop: () => { } };

    let tweens: gsap.core.Tween[] = [];
    const removePrevTweens = () => {
      tweens.forEach((t) => t.kill());
      tweens = [];
    };

    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };

    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap.position, {
          y: 0,
          duration: 4,
          repeat: 0,
          ease: "elastic.out(1,0.8)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 4000);
    };

    return { start, stop };
  }, [splineApp]);

  useEffect(() => {
    let rotateKeyboard: gsap.core.Tween;
    (async () => {
      if (!splineApp) return;
      const kbd = splineApp.findObjectByName("keyboard");
      if (!kbd) return;

      rotateKeyboard = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
      });

      if (activeSection === "hero") {
        rotateKeyboard.restart();
      } else {
        rotateKeyboard.pause();
      }

      if (activeSection === "projects") {
        await sleep(300);
        bongoAnimation?.start();
      } else {
        bongoAnimation?.stop();
      }

      if (activeSection === "contact") {
        await sleep(600);
        keycapAnimations?.start();
      } else {
        keycapAnimations?.stop();
      }
    })();

    return () => {
      if (rotateKeyboard) rotateKeyboard.kill();
    };
  }, [activeSection, splineApp, bongoAnimation, keycapAnimations]);

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

    setBongoAnimation(getBongoAnimation());
    setKeycapAnimations(getKeycapsAnimation());

    return () => {
      if (splineApp) {
        splineApp.removeEventListener("mouseDown", handleAction);
        splineApp.removeEventListener("mouseHover", handleAction);
        splineApp.removeEventListener("keyDown", handleAction);
        splineApp.removeEventListener("mouseUp", handleUp);
        splineApp.removeEventListener("keyUp", handleUp);
      }
    };
  }, [splineApp, handleAction, getBongoAnimation, getKeycapsAnimation]);

  return (
    <div className="w-full h-full relative" style={{ touchAction: "pan-y" }}>
      <Suspense fallback={<div className="flex items-center justify-center h-full text-white">Loading...</div>}>
        <Spline
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
