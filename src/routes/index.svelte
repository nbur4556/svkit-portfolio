<script lang="ts">
  import Card from "../components/Card.svelte";
  import Hero from "../components/Hero.svelte";
  import Link from "../components/Link.svelte";
  import ProjectDisplay from "../components/ProjectDisplay.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import { projects } from "../stores/projectStore";
</script>

<main class="flex flex-col items-center">
  <Hero />

  <Card width="8/12">
    <h2 class="text-2xl font-bold">Featured Portfolio Project(s)</h2>

    {#each $projects as project, index}
      <ProjectDisplay item={project} />
    {/each}
  </Card>

  <Card width="8/12">
    <h2 class="text-2xl font-bold">Work Experience</h2>

    <WorkExperience title="Melodix">
      Developing a full-stack web application for local musicians.
    </WorkExperience>
  </Card>

  <Card width="8/12">
    <h2 class="text-2xl font-bold">Contact Me</h2>

    <ul class="my-4">
      <li><Link href="mailto: nbur4556@gmail.com" external>nbur4556@gmail.com</Link></li>
      <li><Link href="https://github.com/nbur4556" external /></li>
      <li><Link href="https://www.linkedin.com/in/nick-burt/" external /></li>
    </ul>
  </Card>
</main>
