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
  <!-- //! May require double click to select. Can onclick be handled on the card directly? -->
  <img
    slot="image"
    class="w-full hover:opacity-60"
    src={item.image}
    alt={item.imageText}
    on:click={handleOnClick}
  />
</Card>
