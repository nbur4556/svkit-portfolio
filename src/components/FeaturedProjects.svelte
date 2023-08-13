<script lang="ts">
  import FeaturedProjectItem from "../components/FeaturedProjectItem.svelte";
  import ProjectSelector from "../components/ProjectSelector.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];

  $: selectedImage = `bg-[url('${selected.image}')]`;
</script>

<section class="flex flex-col gap-md mb-lg" data-cy="featured-projects">
  <h2 id="featured" class="text-2xl text-white font-bold">{"> My Projects"}</h2>

  <section class="flex lg:flex-row flex-col items-stretch lg:gap-sm gap-xs">
    <!-- //TODO: Should navigate to website on click -->
    <!-- //TODO: Should display navigation to website text on hover -->
    <FeaturedProjectItem image={selected.image} />
    <FeaturedProjectItem
      title={selected.title}
      description={selected.description}
      image={selected.image}
    />
    <!-- //TODO: Should navigate to repository on click -->
    <!-- //TODO: Should display navigation to repository text on hover -->
    <FeaturedProjectItem image={selected.image} />
  </section>

  <ProjectSelector
    count={projectData.length}
    on:update={({ detail }) => (selected = projectData[detail.value - 1])}
  />
</section>
