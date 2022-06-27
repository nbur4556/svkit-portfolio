import { readable } from "svelte/store";

export interface Experience {
    title: string;
    description: string;
    timeframe: string;
}

const experienceData: Array<Experience> = [
    {
        title: "Melodix",
        description: "Developing full-stack technology for musicians and music lovers.",
        timeframe: "2m"
    },
    {
        title: "WePair",
        description: "Produced a full featured SaaS payment system using Stripe and Paypal.",
        timeframe: "1y",
    },
    {
        title: "Retrospective",
        description: "Built a custom Shopify theme and content management system.",
        timeframe: "6m"
    }
];

export const experienceStore = readable(experienceData);