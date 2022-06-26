<script lang="ts">
  import Card from "../components/Card.svelte";
  import Hero from "../components/Hero.svelte";
  import Link from "../components/Link.svelte";
  import ProjectPreview from "../components/ProjectPreview.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import { projects } from "../stores/projectStore";
</script>

<main class="flex flex-col items-center">
  <Hero />

  <!-- //! Make sure width can not be overriden by flexbox parent element -->
  <section class="flex flex-row justify-evenly space-x-4 my-4 w-9/12">
    {#each $projects as project, index}
      <ProjectPreview item={project} />
    {/each}
  </section>

  <Card styleClass="my-4 w-9/12">
    <h2 class="text-2xl font-bold">Work Experience</h2>

    <WorkExperience title="Melodix">
      Developing a full-stack web application for local musicians.
    </WorkExperience>
  </Card>

  <Card styleClass="my-4 w-9/12">
    <h2 class="text-2xl font-bold">Contact Me</h2>

    <ul class="my-4">
      <li><Link href="mailto: nbur4556@gmail.com" external>nbur4556@gmail.com</Link></li>
      <li><Link href="https://github.com/nbur4556" external /></li>
      <li><Link href="https://www.linkedin.com/in/nick-burt/" external /></li>
    </ul>
  </Card>
</main>
