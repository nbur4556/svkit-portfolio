<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let count: number;

  const dispatch = createEventDispatcher();

  let selected: number = 1;

  const handleUpdate = () => {
    dispatch("update", {
      value: selected,
    });
  };

  $: displaySelected = selected < 10 ? `0${selected}` : selected;
  $: displayCount = count < 10 ? `0${count}` : count;
</script>

<section class="flex flex-col items-center">
  <input type="range" bind:value={selected} min={1} max={count} on:change={handleUpdate} />
  <p class="text-body">{displaySelected} / {displayCount}</p>
</section>
