<script lang="ts">
  import Card from "./Card.svelte";
  import Link from "./Link.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import { projects } from "../stores/projectStore";
  import type { Project } from "../stores/projectStore";

  let selected: Project = $projects[0];
</script>

<section class="flex flex-col space-y-4 w-7/12" data-cy="featured-projects">
  <Card headingClass="py-4 px-10" contentClass="flex flex-col space-y-4 p-10">
    <h2 slot="heading" id="featured" class="text-2xl font-bold text-slate-100">{selected.title}</h2>

    <img slot="image" src={selected.image} alt={selected.imageText} />

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
