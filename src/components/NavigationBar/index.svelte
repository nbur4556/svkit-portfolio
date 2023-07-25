<script lang="ts">
  import { page } from "$app/stores";

  import Link from "../../components/Link.svelte";
  import navigationRoutes from "../../components/NavigationBar/navigationRoutes";
  import { paths } from "../../util/paths";

  let scrollY: number;
  $: bgColor = scrollY === 0 ? "" : "bg-dark";
  $: margin = scrollY === 0 ? "my-48px" : "my-18px";
</script>

<svelte:window bind:scrollY />

<!-- //TODO: Selected link gradient -->
<nav class={`flex flex-row justify-center w-full fixed  ${bgColor}`} data-cy="nav-bar">
  <section class="flex flex-row justify-between max-w-1220px w-full">
    <ul class={`flex flex-row gap-57px max-w-1220px ${margin} transition-spacing ease-in-out`}>
      {#each navigationRoutes as route}
        <li>
          <Link
            href={route.href}
            styleClass={$page.url.hash === route.href
              ? `text-accent3`
              : "text-link-300 hover:text-link-200"}
            external={route.external}
            testId={route.linkText + "-link"}
          >
            {route.linkText}
          </Link>
        </li>
      {/each}
    </ul>

    <ul class={`${margin} transition-spacing ease-in-out`}>
      <li>
        <Link href={paths.contact} styleClass="text-accent1-400 hover:text-accent1-200">
          _Contact Me
        </Link>
      </li>
    </ul>
  </section>
</nav>
