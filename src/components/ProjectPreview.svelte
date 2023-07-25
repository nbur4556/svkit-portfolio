<script lang="ts">
  import Card from "../components/UI/Card.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
  export let selectItem: (item: Project) => void;
  export let testId: string = "";

  const handleOnClick = () => {
    selectItem(item);
  };
</script>

<!-- //TODO: Replace with a slider OR delete -->
<Card {testId}>
  <!-- //! May require double click to select. Can onclick be handled on the card directly? -->
  <!-- <button slot="image" on:click={handleOnClick} data-cy={`${testId}-button`}>
    <img class="w-full hover:opacity-60" src={item.image} alt={item.imageText} />
  </button> -->
</Card>
