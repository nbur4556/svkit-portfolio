<script lang="ts">
  import ProjectDisplay from "../components/ProjectDisplay.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";
  import { projects } from "../stores/projectStore";
</script>

<main class="h-screen">
  <h1>Hi, I'm Nick and I am a Full Stack Web Developer</h1>

  <p>
    I am a full stack developer based in Austin Texas. I have a passion in creating beautiful and
    responsive web applications powered by scalable servers and databases.
  </p>

  <section>
    <h2>Featured Portfolio Project(s)</h2>

    {#each $projects as project, index}
      <ProjectDisplay item={project} />
    {/each}
  </section>

  <section>
    <h2>Work Experience</h2>

    <WorkExperience title="Melodix">
      Developing a full-stack web application for local musicians.
    </WorkExperience>
  </section>

  <section>
    <h2>Contact Me</h2>

    <ul>
      <li><a href="mailto: nbur4556@gmail.com" target="_blank">nbur4556@gmail.com</a></li>
      <li><a href="https://github.com/nbur4556" target="_blank">Github</a></li>
      <li><a href="https://www.linkedin.com/in/nick-burt/" target="_blank">Linked In</a></li>
    </ul>
  </section>
</main>
