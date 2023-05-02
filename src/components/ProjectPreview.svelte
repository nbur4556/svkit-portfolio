<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
  export let selectItem: (item: Project) => void;
  export let testId: string = "";

  const handleOnClick = () => {
    selectItem(item);
  };
</script>

<Card cardClass="overflow-hidden" {testId}>
  <button slot="image" on:click={handleOnClick}>
    <img
      class="w-full hover:opacity-60"
      src={item.image}
      alt={item.imageText}
    />
  </button>
</Card>
