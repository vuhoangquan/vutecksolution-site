import type { Metadata } from "next";
import PolyArt from "@/components/PolyArt";

export const metadata: Metadata = {
  title: "Page not found · vutecksolution",
};

export default function NotFound() {
  return (
    <main className="notfound">
      <PolyArt className="hero__art" seed={404} palette={["#0f172a", "#334155", "#f59e0b"]} cols={12} rows={8} />
      <div className="notfound__inner">
        <p className="kicker">404</p>
        <h1>This page does not exist.</h1>
        <a className="btn" href="/">
          Back to vutecksolution.com
        </a>
      </div>
    </main>
  );
}
