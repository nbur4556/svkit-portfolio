<script lang="ts">
  import FeaturedProjectItem from "../components/FeaturedProjectItem.svelte";
  import ProjectSelector from "../components/ProjectSelector.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];

  $: selectedImage = `bg-[url('${selected.image}')]`;
  $: console.log(selectedImage);
</script>

<section class="flex flex-col gap-md mb-lg" data-cy="select-feature">
  <h2 id="featured" class="text-2xl text-white font-bold">{"> My Projects"}</h2>

  <section class="flex flex-row items-stretch gap-sm">
    <FeaturedProjectItem
      title={selected.title}
      description={selected.description}
      image={selected.image}
    />
    <FeaturedProjectItem
      title={selected.title}
      description={selected.description}
      image={selected.image}
    />
    <FeaturedProjectItem
      title={selected.title}
      description={selected.description}
      image={selected.image}
    />
  </section>

  <ProjectSelector
    count={projectData.length}
    on:update={({ detail }) => (selected = projectData[detail.value - 1])}
  />
</section>
