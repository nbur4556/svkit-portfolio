<script lang="ts">
  import Icon from "../Icon.svelte";
  import Link from "../Link.svelte";
  import navigationRoutes from "./navigationRoutes";

  let displayLinks: boolean = false;

  const toggleDisplayLinks = () => (displayLinks = !displayLinks);
</script>

<nav class="p-5 fixed bg-gray-900/90" data-cy="nav-bar">
  <button class="fa-solid fa-bars text-4xl text-slate-200" on:click={toggleDisplayLinks} />

  {#if displayLinks}
    <ul class="flex flex-col">
      {#each navigationRoutes as route}
        <li class="my-4">
          <Icon tooltip={route.linkText} name={route.linkIcon || ""} />
          <Link
            href={route.href}
            styleClass="px-4 text-slate-100 hover:text-slate-300"
            external={route.external}
            testId={route.linkText + "-link"}
          >
            {route.linkText}
          </Link>
        </li>
      {/each}
    </ul>
  {/if}
</nav>
