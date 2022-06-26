<script lang="ts">
  import Link from "./Link.svelte";
  import type { Project } from "../stores/projectStore";

  export let item: Project;
</script>

<section class="my-4">
  <h3 class="text-lg font-bold">{item.title}</h3>
  <p>{item.description}</p>

  <img src={item.image} alt={item.imageText} />

  <Link href={item.websiteLink} external>website</Link>
  <Link href={item.repoLink} external>repository</Link>
</section>
