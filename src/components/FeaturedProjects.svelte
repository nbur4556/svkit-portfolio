<script lang="ts">
  import Card from "./Card.svelte";
  import Link from "./Link.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import { projects } from "../stores/projectStore";
  import type { Project } from "../stores/projectStore";

  let selected: Project = $projects[0];
</script>

<section class="flex flex-col space-y-4 w-9/12">
  <Card styleClass="flex flex-col space-y-4 p-10 h-5/6">
    <h3 class="text-lg font-bold">{selected.title}</h3>
    <img
      class="border-2 rounded w-9/12 self-center border-slate-500"
      src={selected.image}
      alt={selected.imageText}
    />

    <p>{selected.description}</p>
    <div class="flex flex-row space-x-10">
      <Link href={selected.websiteLink} external>Website</Link>
      <Link href={selected.repoLink} external>Repository</Link>
    </div>
  </Card>

  <div class="flex flex-row justify-evenly space-x-4 h-40">
    {#each $projects as project, index}
      <ProjectPreview item={project} selectItem={(item) => (selected = item)} />
    {/each}
  </div>
</section>
