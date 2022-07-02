<script lang="ts">
  import Desktop from "./Desktop.svelte";
  const mobileMaxWidth: number = 1024;
  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<Desktop />
