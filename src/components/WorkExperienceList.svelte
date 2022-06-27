<script lang="ts">
  import Card from "../components/Card.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import type { Experience } from "../stores/experienceStore";

  export let experienceData: Array<Experience>;
</script>

<Card
  cardClass="w-7/12"
  headingClass="py-4 px-10"
  contentClass="flex flex-col space-y-16 p-10"
  testId="work-experience"
>
  <h2 slot="heading" id="experience" class="text-2xl font-bold text-slate-100">Work Experience</h2>

  {#each experienceData as experience}
    <WorkExperience title={experience.title} timeframe={experience.timeframe}>
      {experience.description}
    </WorkExperience>
  {/each}
</Card>
