<script lang="ts">
  import ImageContainer from "../components/UI/ImageContainer.svelte";
  import Link from "../components/UI/Link.svelte";

  import type { Project } from "../stores/projectStore";

  export let projectData: Array<Project>;

  let selected: Project = projectData[0];
</script>

<section class="mb-lg" data-cy="select-feature">
  <h2 id="featured" class="mb-md text-2xl text-white font-bold">{"> My Projects"}</h2>

  <section class="flex flex-row items-stretch gap-sm">
    <div>
      <ImageContainer
        classExt="rounded-2xl h-440px"
        src={selected.image}
        alt={selected.imageText}
      />
      <Link href={selected.websiteLink} external testId="select-website">Website</Link>
    </div>
    <div>
      <ImageContainer
        classExt="rounded-2xl h-440px"
        src={selected.image}
        alt={selected.imageText}
      />
      <p>{selected.description}</p>
    </div>
    <div>
      <ImageContainer
        classExt="rounded-2xl h-440px"
        src={selected.image}
        alt={selected.imageText}
      />
      <Link href={selected.repoLink} external testId="select-repository">Repository</Link>
    </div>
  </section>
</section>
