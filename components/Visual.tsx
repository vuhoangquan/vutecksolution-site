import type { Media, Palette } from "@/lib/content";
import ModelViewer from "./ModelViewer";
import PolyArt from "./PolyArt";

type Props = {
  media: Media;
  seed: number;
  palette: Palette;
  className?: string;
};

// One slot for an item's visual: generated placeholder art today, a real image
// or .glb model once one exists (set `media` in lib/content.ts).
export default function Visual({ media, seed, palette, className = "" }: Props) {
  return (
    <div className={`visual ${className}`}>
      {media.kind === "image" && (
        <img src={media.src} alt={media.alt} loading="lazy" decoding="async" />
      )}
      {media.kind === "model" && <ModelViewer src={media.src} alt={media.alt} poster={media.poster} />}
      {media.kind === "placeholder" && <PolyArt seed={seed} palette={palette} />}
    </div>
  );
}
