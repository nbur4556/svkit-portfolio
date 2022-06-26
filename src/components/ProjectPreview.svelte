<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
  export let selectItem: (item: Project) => void;

  const handleOnClick = (e: MouseEvent) => {
    selectItem(item);
  };
</script>

<Card styleClass="p-0 w-full">
  <img
    class="w-full hover:opacity-60"
    src={item.image}
    alt={item.imageText}
    on:click={handleOnClick}
  />
</Card>
