<script lang="ts">
  import { onDestroy } from "svelte";

  import Card from "../components/Card.svelte";
  import FeaturedProjects from "../components/FeaturedProjects.svelte";
  import Hero from "../components/Hero.svelte";
  import Link from "../components/Link.svelte";
  import NavigationBar from "../components/NavigationBar.svelte";
  import PageContent from "../components/PageContent.svelte";
  import WorkExperienceList from "../components/WorkExperienceList.svelte";
  import { projectStore } from "../stores/projectStore";
  import { experienceStore } from "../stores/experienceStore";

  import type { Project } from "../stores/projectStore";
  import type { Experience } from "../stores/experienceStore";

  let experienceData: Array<Experience>;
  let projectData: Array<Project>;

  const closeProjectStore = projectStore.subscribe((data) => {
    projectData = data;
  });

  const closeExperienceStore = experienceStore.subscribe((data) => {
    experienceData = data;
  });

  onDestroy(() => {
    closeProjectStore();
    closeExperienceStore();
  });
</script>

<main>
  <NavigationBar />
  <PageContent>
    <Hero />
    <FeaturedProjects {projectData} />
    <WorkExperienceList {experienceData} />

    <Card cardClass="w-7/12" headingClass="py-4 px-10" contentClass="p-10" testId="contact">
      <h2 slot="heading" id="contact" class="text-2xl font-bold text-slate-100">Contact Me</h2>

      <ul class="my-4">
        <li><Link href="mailto: nbur4556@gmail.com" external>nbur4556@gmail.com</Link></li>
        <li><Link href="https://github.com/nbur4556" external /></li>
        <li><Link href="https://www.linkedin.com/in/nick-burt/" external /></li>
      </ul>
    </Card>
  </PageContent>
</main>
