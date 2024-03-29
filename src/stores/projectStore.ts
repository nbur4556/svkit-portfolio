import { readable } from "svelte/store";

export interface Project {
  title: string;
  description: string;
  websiteLink: string;
  repoLink: string;
  image: string;
  imageText: string;
}

const projectsData: Array<Project> = [
  {
    title: "Lamplist Jobs",
    description:
      "Lamplist Jobs helps structure and organize your job search. Using the lamplist method, keep track of job applications and find open positions.",
    websiteLink: "https://lamplist.nickburt.dev",
    repoLink: "https://github.com/nbur4556/lamplist-jobs",
    image: "/images/projects/lamplist-jobs-main.png",
    imageText: "Lamplist Jobs landing page",
  },
  {
    title: "Dev Issue Tracker",
    description:
      "Dev Issue Tracker is a resource for organizing bugs, issues, and features on development projects. The application features robust state management implementing React's Context API, making state easily accessible across the various components of the project.",
    websiteLink: "https://dev-issue-tracker.onrender.com",
    repoLink: "https://github.com/nbur4556/issue_reporter",
    image: "/images/projects/dev-issue-main.png",
    imageText: "Dev Issue lading page",
  },
  {
    title: "SurvEasy",
    description:
      "SurvEasy makes it easy to know what your target market is thinking. The application provides a simple solution for creating and providing surveys to your intended audience. This project is built with a React client, and Node JS for the server. In creating SurvEasy, I was able to provide a secure and full featured user authorization process involving encrypted passwords, and JSON web tokens for authentication. Users can create and provide surveys with a dedicated link, and data and analytics from the surveys are provided using Chart.js to display on the front end.",
    websiteLink: "https://surveasy.onrender.com",
    repoLink: "https://github.com/nbur4556/Surveasy",
    image: "/images/projects/surveasy-main.png",
    imageText: "SurvEasy landing Page",
  },
];

export const projectStore = readable(projectsData);
