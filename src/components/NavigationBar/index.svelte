<script lang="ts">
  import { page } from "$app/stores";

  import navigationRoutes from "../../components/NavigationBar/navigationRoutes";
  import Link from "../../components/UI/Link.svelte";
  import { paths } from "../../util/paths";

  let scrollY: number;
  $: bgColor = scrollY === 0 ? "" : "bg-dark";
  $: margin = scrollY === 0 ? "my-40px" : "my-xs";
</script>

<svelte:window bind:scrollY />

<!-- //TODO: Selected link gradient -->
<nav class={`flex flex-row justify-center w-full fixed  ${bgColor}`} data-cy="nav-bar">
  <section class="flex flex-row justify-between max-w-container-lg w-full">
    <ul class={`flex flex-row gap-md ${margin} transition-spacing ease-in-out`}>
      {#each navigationRoutes as route}
        <li>
          <Link
            href={route.href}
            styleClass={$page.url.hash === route.href
              ? `text-accent3-400`
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
