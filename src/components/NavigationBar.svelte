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

<nav class="flex flex-col justify-center fixed top-0 left-0 h-screen w-1/6">
  <ul class="flex flex-col justify-evenly items-end h-5/6">
    {#each navigationRoutes as route}
      <li>
        <Link href={route.href} styleClass="text-slate-100 hover:text-slate-300"
          >{route.linkText}</Link
        >
      </li>
    {/each}
  </ul>
</nav>
