<script lang="ts">
  import ProjectPreview from "./ProjectPreview.svelte";
  import { projects } from "../stores/projectStore";
  import type { Project } from "../stores/projectStore";

  let selectedProject: Project = $projects[0];

  $: console.log(selectedProject);
</script>

<section class="flex flex-row justify-evenly space-x-4 my-4 w-9/12">
  {#each $projects as project, index}
    <ProjectPreview item={project} selectItem={(item) => (selectedProject = item)} />
  {/each}
</section>
