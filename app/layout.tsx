import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vutecksolution.com"),
  title: "vutecksolution: software and hardware",
  description:
    "Digital transformation for small firms: websites, back office and domain-specific business operations. Plus smart home automation, robotics and 3D equipment models.",
  openGraph: {
    title: "vutecksolution",
    description: "Software and hardware: digital transformation for small firms, smart home automation, robotics and 3D equipment models.",
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
