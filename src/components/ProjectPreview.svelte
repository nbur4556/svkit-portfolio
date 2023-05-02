<script lang="ts">
  import Card from "./Card.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
  export let selectItem: (item: Project) => void;
  export let testId: string = "";

  const handleOnClick = () => {
    console.log("clicked");
    selectItem(item);
  };
</script>

<Card cardClass="overflow-hidden" {testId}>
  <!-- //! May require double click to select. Can onclick be handled on the card directly? -->
  <button slot="image" on:click={handleOnClick} data-cy={`${testId}-button`}>
    <img class="w-full hover:opacity-60" src={item.image} alt={item.imageText} />
  </button>
</Card>
