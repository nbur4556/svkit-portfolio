import { readable } from "svelte/store";

export interface Experience {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
}

const experienceData: Array<Experience> = [
  {
    title: "Melodix",
    description: "Creating full-stack technology for musicians and music lovers.",
    startDate: new Date(2022, 4),
  },
  {
    title: "CypherEye",
    description: "Developed a mobile messaging and authentication app using React Native.",
    startDate: new Date(2022, 9)
  },
  {
    title: "WePair",
    description: "Produced a full featured SaaS payment system using Stripe and Paypal.",
    startDate: new Date(2021, 7),
    endDate: new Date(2021, 12),
  },
  {
    title: "Retrospective",
    description: "Built a custom Shopify theme and content management system.",
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 3),
  },
];

export const experienceStore = readable(experienceData);
