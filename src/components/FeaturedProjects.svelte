<script lang="ts">
  import Card from "./Card.svelte";
  import Link from "./Link.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];
</script>

<section data-cy="select-feature">
  <h2 id="featured" class="text-2xl text-white font-bold">{"> My Projects"}</h2>

  <section class="flex flex-row gap-32px">
    <div class="h-442px">
      <img class="object-fill" src={selected.image} alt={selected.imageText} />
    </div>
    <div class="h-442px">
      <img class="object-fill" src={selected.image} alt={selected.imageText} />
    </div>
    <div class="h-442px">
      <img class="object-fill" src={selected.image} alt={selected.imageText} />
    </div>
  </section>

  <p>{selected.description}</p>
  <div class="flex flex-row space-x-10">
    <Link href={selected.websiteLink} external testId="select-website">Website</Link>
    <Link href={selected.repoLink} external testId="select-repository">Repository</Link>
  </div>
</section>

<div class="flex flex-row justify-evenly space-x-4 h-40" data-cy="preview-feature">
  {#each projectData as project, index}
    <ProjectPreview
      item={project}
      selectItem={(item) => (selected = item)}
      testId={`preview-${index}`}
    />
  {/each}
</div>
