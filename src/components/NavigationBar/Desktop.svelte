<script lang="ts">
  import Link from "../Link.svelte";
  import navigationRoutes from "./navigationRoutes";

  let scrollY: number;
  $: width = scrollY === 0 ? "w-1/5" : "w-1/12";
  $: displayLinkText = scrollY === 0;
</script>

<svelte:window bind:scrollY />

<nav
  class={`flex flex-col justify-center fixed h-screen ${width} transition-width ease-in-out`}
  data-cy="nav-bar"
>
  <ul class="flex flex-col justify-evenly items-end h-5/6">
    {#each navigationRoutes as route}
      <li>
        <Link
          href={route.href}
          styleClass="text-slate-100 hover:text-slate-300"
          external={route.external}
          testId={route.linkText + "-link"}
        >
          {displayLinkText ? route.linkText : ""}
          <i
            class={`fa-solid ${route.linkIcon} px-4 text-2xl align-middle text-slate-200 hover:text-slate-300`}
          />
        </Link>
      </li>
    {/each}
  </ul>
</nav>
