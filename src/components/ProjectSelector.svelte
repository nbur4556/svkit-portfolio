<script lang="ts">
  export let count: number;

  let selected = 1;

  $: displaySelected = (selected < 10) ? `0${selected}` : selected;
  $: displayCount = (count < 10) ? `0${count}` : count;
</script>

<section class="flex flex-col items-center">
  <input type="range" bind:value={selected} min={1} max={count}>
  <p class="text-body">{displaySelected} / {displayCount}</p>
</section>