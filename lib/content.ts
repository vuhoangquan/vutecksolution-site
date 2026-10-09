// Site copy and media. Keep copy to the facts in the build brief: no invented
// claims, dates, client names or team credits.
//
// To swap a placeholder for a real asset, change an item's `media`:
//   { kind: "image", src: "/images/tour.jpg", alt: "..." }
//     (add fit: "contain" and a background to show the whole image uncropped)
//   { kind: "model", src: "/models/arm.glb", alt: "...", poster: "/images/arm.jpg" }
// Put files under public/. Compress models with Draco or meshopt and textures
// as KTX2, and keep each file well under 100 MB.

export type Media =
  | { kind: "placeholder" }
  | { kind: "image"; src: string; alt: string; fit?: "cover" | "contain"; background?: string }
  | { kind: "model"; src: string; alt: string; poster?: string };

export type Palette = [string, string, string];

export type Item = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  seed: number;
  palette: Palette;
  media: Media;
  links?: { href: string; label: string }[];
};

export type Group = {
  items: Item[];
  // Render the items as one wide card each instead of a grid.
  wide?: boolean;
  // Short list shown under the cards, e.g. related topics.
  points?: { title: string; points: string[] };
};

export type Section = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  groups: Group[];
};

const placeholder: Media = { kind: "placeholder" };

export const OCEANAMI_URL = "https://oceanami.vutecksolution.com/oceanami";
export const AGODA_URL = "https://www.agoda.com/oceanami-villa-b1401/hotel/vung-tau-vn.html";

export const sections: Section[] = [
  {
    id: "software",
    eyebrow: "01",
    title: "Software",
    intro: "We have served small firms with digital transformation: websites, back office and domain-specific business operations.",
    groups: [
      {
        items: [
          {
            id: "web-setup",
            title: "Homestay web setup",
            body: "Two web apps on one cloud instance, each with its own domain, plus a Google Business Profile and Agoda policies.",
            tags: ["Web apps", "Domains", "Google Business Profile", "Agoda"],
            seed: 23,
            palette: ["#155e75", "#38bdf8", "#a7f3d0"],
            media: placeholder,
            links: [
              { href: OCEANAMI_URL, label: "Visit Oceanami" },
              { href: AGODA_URL, label: "View on Agoda" },
            ],
          },
          {
            id: "virtual-tour",
            title: "Homestay 360° virtual tour",
            body: "Photos taken on an iPhone and shown in a 360° viewer.",
            tags: ["360°", "iPhone", "Viewer"],
            seed: 37,
            palette: ["#9a3412", "#fb923c", "#fde68a"],
            media: placeholder,
          },
        ],
      },
    ],
  },
  {
    id: "hardware",
    eyebrow: "02",
    title: "Hardware",
    intro: "Smart home automation, robotics and 3D equipment models.",
    groups: [
      {
        items: [
          {
            id: "smart-home",
            title: "Homestay smart home automation",
            body: "ESP32 nodes running ESPHome handle IR control and PIR and mmWave occupancy sensing. Home Assistant on a Raspberry Pi is the hub, and it automates the AC and TV.",
            tags: ["ESP32", "ESPHome", "IR", "PIR", "mmWave", "Home Assistant", "Raspberry Pi"],
            seed: 11,
            palette: ["#0f766e", "#14b8a6", "#fcd34d"],
            media: placeholder,
          },
          {
            id: "robot-arm",
            title: "Robot arm",
            body: "A two-tier design on an SO-ARM101 with a Jetson Orin Nano Super. Fast motion runs on the arm itself, and a cloud LLM plans the moves.",
            tags: ["SO-ARM101", "Jetson Orin Nano Super", "Cloud LLM"],
            seed: 41,
            palette: ["#312e81", "#6366f1", "#22d3ee"],
            media: placeholder,
          },
          {
            id: "robot-vacuum",
            title: "DIY robot vacuum",
            body: "Based on the makerspet/oomwoo repo, on a Raspberry Pi 4B with an ESP32. It skips the camera ML tier and uses lighter Nav2 controllers.",
            tags: ["makerspet/oomwoo", "Raspberry Pi 4B", "ESP32", "Nav2"],
            seed: 53,
            palette: ["#1e3a8a", "#3b82f6", "#a5b4fc"],
            media: placeholder,
          },
        ],
        points: {
          title: "Robotics, also covered",
          points: ["Motor controls", "Lidar and sensors", "Where ROS fits", "Vision models: YOLO, CLIP, SAM"],
        },
      },
      {
        wide: true,
        items: [
          {
            id: "3d-models",
            title: "3D equipment models",
            body: "Highly detailed 3D models of industrial machinery equipment modules, designed within the team. Shown: a dimensioned section of a load-bearing part modelled for 3D printing.",
            tags: ["3D modelling", "3D printing", "Industrial machinery", "Equipment modules"],
            seed: 67,
            palette: ["#44403c", "#a8a29e", "#f59e0b"],
            media: {
              kind: "image",
              src: "/images/3d-printed-part-section.png",
              alt: "Dimensioned cross-section drawing of a 3D-printed equipment part, 115 mm tall overall",
              fit: "contain",
              background: "#f4f2ee",
            },
          },
        ],
      },
    ],
  },
];

export const hero = {
  seed: 7,
  palette: ["#0f172a", "#0e7490", "#f59e0b"] as Palette,
};
