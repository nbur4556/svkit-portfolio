<script lang="ts">
  import Card from "../components/Card.svelte";
  import ProjectDisplay from "../components/ProjectDisplay.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import { projects } from "../stores/projectStore";
</script>

<main>
  <header class="p-4">
    <h1 class="text-4xl font-bold text-slate-100">Hi, I'm Nick Burt</h1>
    <h2 class=" text-2xl font-bold text-slate-100">I make things on the web</h2>
  </header>

  <section class="flex-col">
    <Card>
      <p class="my-4">
        I am a full stack developer based in Austin Texas. I have a passion in creating beautiful
        and responsive web applications powered by scalable servers and databases.
      </p>
    </Card>

    <Card>
      <h2 class="text-2xl font-bold">Featured Portfolio Project(s)</h2>

      {#each $projects as project, index}
        <ProjectDisplay item={project} />
      {/each}
    </Card>

    <Card>
      <h2 class="text-2xl font-bold">Work Experience</h2>

      <WorkExperience title="Melodix">
        Developing a full-stack web application for local musicians.
      </WorkExperience>
    </Card>

    <Card>
      <h2 class="text-2xl font-bold">Contact Me</h2>

      <ul class="my-4">
        <li><a href="mailto: nbur4556@gmail.com" target="_blank">nbur4556@gmail.com</a></li>
        <li><a href="https://github.com/nbur4556" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/nick-burt/" target="_blank">Linked In</a></li>
      </ul>
    </Card>
  </section>
</main>
