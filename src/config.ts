export const SITE = {
  title: "SeaBotics UiA",
  description: "Wiki page for documenting Seabotics' ASV family",
  defaultLanguage: "en_US",
  //twitter: "@jordienr",
  github: "SeaBotics",
  linkedin: "seabotics",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Introduction", link: "/core/introduction" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },

  { text: "Hugr Primus", header: true },
  { text: "Introduction", link: "/hugr/primus" },
];
