<script lang="ts">
  import Link from "../Link.svelte";
  import navigationRoutes from "./navigationRoutes";

  let scrollY: number;
  $: bgColor = (scrollY === 0) ? "" : "bg-dark";
  $: margin = (scrollY === 0) ? "my-48px" : "my-18px";
</script>

<svelte:window bind:scrollY />

<!-- //TODO: Selected link color -->
<!-- //TODO: background color when not scrolled to top -->
<nav class={`fixed w-full ${bgColor}`} data-cy="nav-bar">
  <ul class={`flex flex-row justify-evenly ${margin} transition-spacing ease-in-out`}>
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
