<script lang="ts">
  import ImageContainer from "./UI/ImageContainer.svelte";
  import Link from "./Link.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];
</script>

<section data-cy="select-feature">
  <h2 id="featured" class="mb-74px text-2xl text-white font-bold">{"> My Projects"}</h2>

  <section class="flex flex-row items-stretch gap-32px h-442px">
    <ImageContainer classExt="rounded-2xl" src={selected.image} alt={selected.imageText} />
    <ImageContainer classExt="rounded-2xl" src={selected.image} alt={selected.imageText} />
    <ImageContainer classExt="rounded-2xl" src={selected.image} alt={selected.imageText} />
  </section>

  <p>{selected.description}</p>
  <div class="flex flex-row space-x-10">
    <Link href={selected.websiteLink} external testId="select-website">Website</Link>
    <Link href={selected.repoLink} external testId="select-repository">Repository</Link>
  </div>
</section>
