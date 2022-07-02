import { paths } from "../../util/paths";

export interface NavigationRoute {
    href: string;
    linkText: string;
    external?: boolean;
}

const navigationRoutes: Array<NavigationRoute> = [
    { href: paths.featured, linkText: "Featured Projects" },
    { href: paths.experience, linkText: "Work Experience" },
    { href: paths.contact, linkText: "Contact Me" },
    { href: paths.resume, linkText: "My Resume", external: true },
];

export default navigationRoutes;