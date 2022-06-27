<script lang="ts">
  import Link from "./Link.svelte";
  import { paths } from "../util/paths";

  interface NavigationRoute {
    href: string;
    linkText: string;
  }

  const navigationRoutes: Array<NavigationRoute> = [
    { href: paths.featured, linkText: "Featured Projects" },
    { href: paths.experience, linkText: "Work Experience" },
    { href: paths.contact, linkText: "Contact Me" },
  ];
</script>

<nav>
  <ul>
    {#each navigationRoutes as route}
      <li>
        <Link href={route.href}>{route.linkText}</Link>
      </li>
    {/each}
  </ul>
</nav>
