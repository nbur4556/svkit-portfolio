import { readable } from "svelte/store";

export interface Experience {
    title: string;
    description: string;
}

const experienceData: Array<Experience> = [
    {
        title: "Melodix",
        description: "Developing full-stack technology for musicians and music lovers.",
    },
    {
        title: "WePair",
        description: "Produced a full featured SaaS payment system using Stripe and Paypal.",
    },
    {
        title: "Retrospective",
        description: "Built a custom Shopify theme and content management system.",
    }
];

export const experienceStore = readable(experienceData);