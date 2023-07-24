<script lang="ts">
  import Link from "../Link.svelte";
  import navigationRoutes from "./navigationRoutes";
</script>

<!-- //TODO: Selected link color -->
<!-- //TODO: background color when not scrolled to top -->
<nav class="fixed w-full" data-cy="nav-bar">
  <ul class="flex flex-row justify-evenly m-48px">
    {#each navigationRoutes as route}
      <li>
        <Link
          href={route.href}
          styleClass="text-link-300 hover:text-link-200"
          external={route.external}
          testId={route.linkText + "-link"}
        >
          {route.linkText}
        </Link>
      </li>
    {/each}
  </ul>
</nav>
