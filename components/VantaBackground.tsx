"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface VantaBackgroundProps {
  effect: "birds" | "waves" | "net" | "fog" | "clouds" | "globe";
  className?: string;
  children?: React.ReactNode;
}

declare global {
  interface Window {
    THREE: any;
  }
}

export default function VantaBackground({
  effect,
  className = "",
  children,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !vantaRef.current || error) return;

    const loadVanta = async () => {
      try {
        // Load THREE.js first
        if (!window.THREE) {
          const THREE = await import("three");
          window.THREE = THREE;
        }

        let vantaModule: any;
        let vantaOptions: any;

        const isDark = theme === "dark";

        switch (effect) {
          case "birds":
            vantaModule = await import("vanta/dist/vanta.birds.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: isDark ? 0x25283d : 0xefd9ce,
              color1: isDark ? 0x8f3985 : 0x8f3985,
              color2: isDark ? 0x07beb8 : 0x07beb8,
              colorMode: "lerp",
              birdSize: 0.6,
              wingSpan: 20.0,
              speedLimit: 5.0,
              separation: 50.0,
              alignment: 50.0,
              cohesion: 50.0,
              quantity: 3.0,
            };
            break;

          case "waves":
            vantaModule = await import("vanta/dist/vanta.waves.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              shininess: 50.0,
              waveHeight: 20.0,
              waveSpeed: 0.75,
              zoom: 0.75,
              color: isDark ? 0x8f3985 : 0x8f3985,
            };
            break;

          case "net":
            vantaModule = await import("vanta/dist/vanta.net.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: isDark ? 0x8f3985 : 0x8f3985,
              backgroundColor: isDark ? 0x25283d : 0xefd9ce,
              points: 12.0,
              maxDistance: 25.0,
              spacing: 20.0,
            };
            break;

          case "fog":
            vantaModule = await import("vanta/dist/vanta.fog.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              highlightColor: isDark ? 0x8f3985 : 0x8f3985,
              midtoneColor: isDark ? 0x07beb8 : 0x07beb8,
              lowlightColor: isDark ? 0x25283d : 0xefd9ce,
              baseColor: isDark ? 0x25283d : 0xefd9ce,
              blurFactor: 0.6,
              speed: 1.5,
              zoom: 0.8,
            };
            break;

          case "clouds":
            vantaModule = await import("vanta/dist/vanta.clouds.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              skyColor: isDark ? 0x25283d : 0xefd9ce,
              cloudColor: isDark ? 0x8f3985 : 0x8f3985,
              cloudShadowColor: isDark ? 0x07beb8 : 0x07beb8,
              sunColor: isDark ? 0x07beb8 : 0x07beb8,
              sunGlareColor: isDark ? 0x8f3985 : 0x8f3985,
              sunlightColor: isDark ? 0x8f3985 : 0x8f3985,
            };
            break;

          case "globe":
            vantaModule = await import("vanta/dist/vanta.globe.min.js");
            vantaOptions = {
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: isDark ? 0x8f3985 : 0x8f3985,
              color2: isDark ? 0x07beb8 : 0x07beb8,
              backgroundColor: isDark ? 0x25283d : 0xefd9ce,
              size: 1.0,
              spacing: 20.0,
            };
            break;
        }

        if (vantaModule && vantaModule.default) {
          // Clean up previous effect
          if (vantaEffect.current) {
            try {
              vantaEffect.current.destroy();
            } catch (e) {
              console.warn("Error destroying vanta effect:", e);
            }
          }

          // Initialize new effect
          vantaEffect.current = vantaModule.default(vantaOptions);
        }
      } catch (err) {
        console.error("Error loading Vanta.js:", err);
        setError(true);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (e) {
          console.warn("Error cleaning up vanta effect:", e);
        }
        vantaEffect.current = null;
      }
    };
  }, [mounted, effect, theme, error]);

  if (!mounted) {
    return (
      <div className={className} ref={vantaRef}>
        {children}
      </div>
    );
  }

  return (
    <div className={className} ref={vantaRef}>
      {children}
    </div>
  );
}

