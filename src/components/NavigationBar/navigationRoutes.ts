import { paths } from "../../util/paths";

export interface NavigationRoute {
  href: string;
  linkText: string;
  linkIcon?: string;
  external?: boolean;
}

const navigationRoutes: Array<NavigationRoute> = [
  { href: paths.featured, linkText: "Featured Projects", linkIcon: "fa-briefcase" },
  { href: paths.experience, linkText: "Work Experience", linkIcon: "fa-book" },
  { href: paths.contact, linkText: "Contact Me", linkIcon: "fa-envelope" },
  { href: paths.resume, linkText: "My Resume", linkIcon: "fa-file", external: true },
];

export default navigationRoutes;
