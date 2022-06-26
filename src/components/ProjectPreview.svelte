<script lang="ts">
  import Card from "./Card.svelte";
  import Link from "./Link.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
</script>

<Card styleClass="w-full">
  <h3 class="text-lg font-bold">{item.title}</h3>
  <img class="w-full" src={item.image} alt={item.imageText} />

  <p>{item.description}</p>

  <Link href={item.websiteLink} external>website</Link>
  <Link href={item.repoLink} external>repository</Link>
</Card>
