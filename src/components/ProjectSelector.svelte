<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Chevron from "../components/SVG/Chevron.svelte";

  export let count: number;

  const dispatch = createEventDispatcher();

  let selected: number = 1;

  const stepSelected = (step: number) => {
    if (selected + step > 0 && selected + step <= count) {
      selected += step;
      handleUpdate();
    }
  };

  const handleUpdate = () => {
    dispatch("update", {
      value: selected,
    });
  };

  $: displaySelected = selected < 10 ? `0${selected}` : selected;
  $: displayCount = count < 10 ? `0${count}` : count;
</script>

<section class="flex flex-col items-center gap-xxs">
  <input
    class="appearance-none h-4px w-xl bg-body accent accent-accent1-400 overflow-hidden cursor-pointer"
    type="range"
    bind:value={selected}
    min={1}
    max={count}
    on:change={handleUpdate}
  />
  <div class="flex flex-row items-center gap-xs">
    <button on:click={() => stepSelected(-1)} data-cy="project-nav-left">
      <Chevron fill="#0FFEFF" direction={-1} />
    </button>
    <p class="text-body">{displaySelected} / {displayCount}</p>
    <button on:click={() => stepSelected(1)} data-cy="project-nav-right">
      <Chevron fill="#0FFEFF" />
    </button>
  </div>
</section>
