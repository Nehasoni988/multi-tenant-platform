import { ANGULAR_PDF } from "./pdfs/angular";
import { REACT_PDF } from "./pdfs/react";
import { REACT_HOOKS_PDF } from "./pdfs/react-hooks";
import { VUE_PDF } from "./pdfs/vue";
import { ANGULAR_VIDEO } from "./videos/angular";
import { REACT_VIDEO } from "./videos/react";
import { REACT_HOOKS_VIDEO } from "./videos/react-hooks";
import { VUE_VIDEO } from "./videos/vue";

export const CHANNELS = [
  {
    id: "1",
    title: "Channel: React Basics",
    description: "Introduction to React concepts and JSX.",
    content: {
      videos: [REACT_VIDEO],
      pdfs: [REACT_PDF],
    },
  },
  {
    id: "2",
    title: "Channel: React Hooks",
    description: "Deep dive into useState, useEffect, and custom hooks.",
    content: {
      videos: [REACT_HOOKS_VIDEO],
      pdfs: [REACT_HOOKS_PDF],
    },
  },
  {
    id: "3",
    title: "Channel: Vue Basics",
    description: "Core Vue concepts including reactivity and templates.",
    content: {
      videos: [VUE_VIDEO],
      pdfs: [VUE_PDF],
    },
  },
  {
    id: "4",
    title: "Channel: Angular Basics",
    description: "Learn Angular modules, components, and services.",
    content: {
      videos: [ANGULAR_VIDEO],
      pdfs: [ANGULAR_PDF],
    },
  },
];
