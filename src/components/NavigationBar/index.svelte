<script lang="ts">
  import Desktop from "./Desktop.svelte";
  import Mobile from "./Mobile.svelte";

  const mobileMaxWidth: number = 1024;
  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= mobileMaxWidth}
  <Mobile />
{:else}
  <Desktop />
{/if}
