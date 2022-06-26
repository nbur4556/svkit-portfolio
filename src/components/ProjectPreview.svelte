<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
  export let selectItem: (item: Project) => void;

  const handleOnClick = (e: MouseEvent) => {
    selectItem(item);
  };
</script>

<Card cardClass="overflow-hidden">
  <img
    slot="image"
    class="w-full hover:opacity-60"
    src={item.image}
    alt={item.imageText}
    on:click={handleOnClick}
  />
</Card>
