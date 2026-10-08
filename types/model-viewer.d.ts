import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        loading?: "auto" | "lazy" | "eager";
        "camera-controls"?: string;
        "auto-rotate"?: string;
      };
    }
  }
}
