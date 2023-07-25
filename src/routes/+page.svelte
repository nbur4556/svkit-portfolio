<script lang="ts">
  import { onDestroy } from "svelte";

  import Contact from "../components/Contact.svelte";
  import FeaturedProjects from "../components/FeaturedProjects.svelte";
  import Footer from "../components/Footer.svelte";
  import Hero from "../components/Hero.svelte";
  import NavigationBar from "../components/NavigationBar/index.svelte";
  import PageContent from "../components/PageContent.svelte";
  import PageSection from "../components/PageSection.svelte";
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

<NavigationBar />
<PageContent>
  <Hero />
  <PageSection>
    <FeaturedProjects {projectData} />
  </PageSection>
  <PageSection>
    <WorkExperienceList {experienceData} />
  </PageSection>
  <PageSection>
    <Contact />
  </PageSection>
</PageContent>
<Footer />
