import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vutecksolution.com"),
  title: "vutecksolution: homestay automation, robotics and 3D equipment models",
  description:
    "What we have been building: smart home automation, a web setup and a 360° tour for a homestay, a robot arm and a DIY robot vacuum, and detailed 3D models of industrial equipment.",
  openGraph: {
    title: "vutecksolution",
    description: "Homestay automation, robotics and 3D equipment models.",
    url: "/",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
