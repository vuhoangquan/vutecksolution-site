"use client";

import { useEffect } from "react";

// Loads <model-viewer> only on pages that actually show a .glb model.
export default function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={src}
      alt={alt}
      poster={poster}
      loading="lazy"
      camera-controls=""
      auto-rotate=""
      style={{ width: "100%", height: "100%", background: "transparent" }}
    />
  );
}
