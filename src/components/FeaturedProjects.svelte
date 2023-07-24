<script lang="ts">
  import Card from "./Card.svelte";
  import Link from "./Link.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];
</script>

<Card testId="select-feature">
  <h2 slot="heading" id="featured" class="text-2xl font-bold">{"> My Projects"}</h2>

  <img slot="image" src={selected.image} alt={selected.imageText} />

  <p>{selected.description}</p>
  <div class="flex flex-row space-x-10">
    <Link href={selected.websiteLink} external testId="select-website">Website</Link>
    <Link href={selected.repoLink} external testId="select-repository">Repository</Link>
  </div>
</Card>

<div class="flex flex-row justify-evenly space-x-4 h-40" data-cy="preview-feature">
  {#each projectData as project, index}
    <ProjectPreview
      item={project}
      selectItem={(item) => (selected = item)}
      testId={`preview-${index}`}
    />
  {/each}
</div>
