<script lang="ts">
  import Card from "../components/Card.svelte";
  import FeaturedProjects from "../components/FeaturedProjects.svelte";
  import Hero from "../components/Hero.svelte";
  import Link from "../components/Link.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";
</script>

<main class="flex flex-col items-center">
  <Hero />

  <FeaturedProjects />

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
