<script lang="ts">
  import Card from "../components/Card.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import type { Experience } from "../stores/experienceStore";

  export let experienceData: Array<Experience>;
</script>

<Card testId="work-experience">
  <h2 slot="heading" id="experience" class="text-2xl font-bold">{">Work Experience"}</h2>

  {#each experienceData as experience}
    <WorkExperience
      title={experience.title}
      position={experience.position}
      startDate={experience.startDate}
      endDate={experience.endDate}
    >
      {experience.description}
    </WorkExperience>
  {/each}
</Card>
