"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

export default function UnicornStudioEmbed() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initUnicornStudio = () => {
      if (window.UnicornStudio && window.UnicornStudio.init && !window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js";
      script.onload = initUnicornStudio;
      script.onerror = () => console.error("Failed to load UnicornStudio script");
      (document.head || document.body).appendChild(script);
    } else {
      initUnicornStudio();
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        data-us-project="SLrv47o4FFjYcbTd3heE"
        className="w-full h-full"
        style={{ width: "100%", height: "100%", minHeight: "400px" }}
      />
    </div>
  );
}
