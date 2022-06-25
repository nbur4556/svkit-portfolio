import { readable } from "svelte/store";

export interface Project {
    title: string;
    description: string;
    websiteLink: string;
    repoLink: string;
}

const projectsData: Array<Project> = [
    {
        title: "Dev Issue Tracker",
        description: "Dev issue tracker is a resource for organizing bugs, issues, and features on development projects. The application features robust state management implementing React's Context API, making state easily accessible across the various components of the project.",
        websiteLink: "https://devissuetracking.herokuapp.com/",
        repoLink: "https://github.com/nbur4556/issue_reporter",
    },
    {
        title: "SurvEasy",
        description: "SurvEasy makes it easy to know what your target market is thinking. The application provides a simple solution for creating and providing surveys to your intended audience. This project is built with a React client, and Node JS for the server. In creating SurvEasy, I was able to provide a secure and full featured user authorization process involving encrypted passwords, and JSON web tokens for authentication. Users can create and provide surveys with a dedicated link, and data and analytics from the surveys are provided using Chart.js to display on the front end.",
        websiteLink: "https://surveasy.herokuapp.com/",
        repoLink: "https://github.com/Sakiskid/Surveasy",
    },
    {
        title: "Bucket Budget",
        description: "Bucket Budget is a project built with a group of four, which allows a user to plan and budget for a trip or vacation. My role in the group was the head for backend development, so I was in charge of creating the server, and creating an api that worked with Triposo and our own back end database. The project had a need to remember user information in order to save and load their trips. For this, I was able to integrate Google's sign in API. This was chosen to remove the liability of saving passwords, while still giving our users all the benefits of having an account and saving information to our database.",
        websiteLink: "https://bucketbudgetplanner.herokuapp.com/",
        repoLink: "https://github.com/msyatlaus/bucket-budget",
    },
];

export const projects = readable(projectsData);