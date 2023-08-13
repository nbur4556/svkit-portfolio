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
<nav class={`flex flex-row justify-center w-full fixed ${bgColor}`} data-cy="nav-bar">
  <section class="flex flex-row justify-between max-w-container-lg w-full mx-xs">
    <ul
      class={[
        "flex flex-row gap-xxs",
        "transition-spacing ease-in-out text-xs",
        "lg:gap-md lg:text-base",
        margin,
      ].join(" ")}
      data-cy="nav-bar-list"
    >
      {#each navigationRoutes as route}
        <li>
          <Link
            href={route.href}
            class={$page.url.hash === route.href
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

    <ul
      class={`${margin} transition-spacing ease-in-out lg:text-base text-xs`}
      data-cy="nav-bar-cta"
    >
      <li>
        <Link
          href={paths.contact}
          class="text-accent1-400 hover:text-accent1-200"
          testId="_Contact Me-link"
        >
          _Contact Me
        </Link>
      </li>
    </ul>
  </section>
</nav>
