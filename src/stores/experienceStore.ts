import { readable } from "svelte/store";

export interface Experience {
  title: string;
  position: string;
  description: Array<string>;
  startDate: Date;
  endDate?: Date;
}

const experienceData: Array<Experience> = [
  {
    title: "Melodix",
    position: "Web Developer",
    description: [
      "Creating full-stack technology for",
      "musicians",
      "and",
      "music lovers."
    ],
    startDate: new Date(2022, 4),
  },
  {
    title: "CypherEye",
    position: "Mobile Developer",
    description: ["Developed a","mobile messaging","and","authentication app","using React Native."],
    startDate: new Date(2022, 9),
  },
  {
    title: "WePair",
    position: "Freelance Web Developer",
    description: ["Produced a full featured", "SaaS payment system", "using Stripe and", "Paypal."],
    startDate: new Date(2021, 7),
    endDate: new Date(2021, 12),
  },
  {
    title: "Retrospective",
    position: "Freelance Web Developer",
    description: ["Built a", "custom Shopify theme", "and", "content management system."],
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 3),
  },
];

export const experienceStore = readable(experienceData);
