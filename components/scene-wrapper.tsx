// @ts-nocheck
"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("./canvas"), { ssr: false });

export function SceneWrapper() {
  return <SceneCanvas />;
}
