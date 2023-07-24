import { paths } from "../../util/paths";

export interface NavigationRoute {
  href: string;
  linkText: string;
  external?: boolean;
}

const navigationRoutes: Array<NavigationRoute> = [
  { href: paths.featured, linkText: "_Featured Projects" },
  { href: paths.experience, linkText: "_Work Experience" },
  { href: paths.contact, linkText: "_Contact Me" },
  { href: paths.resume, linkText: "_My Resume", external: true },
];

export default navigationRoutes;
