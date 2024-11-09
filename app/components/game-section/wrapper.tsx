"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GameSection } from ".";

export function GameSectionWrapper() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const autoPlay = searchParams.get("play");
    if (autoPlay === "true") {
      const gameSection = document.getElementById("game");
      const playButton = gameSection?.querySelector("button");
      playButton?.click();
    }
  }, [searchParams]);

  return <GameSection />;
}
