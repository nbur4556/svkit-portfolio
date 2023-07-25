<script lang="ts">
  import Card from "../components/Card.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import type { Experience } from "../stores/experienceStore";

  export let experienceData: Array<Experience>;
</script>

<Card classExt="mb-150px" classBodyExt="flex flex-col gap-60px" testId="work-experience">
  <h2 slot="heading" id="experience" class="text-2xl font-bold">{"> Work Experience"}</h2>

  {#each experienceData as experience}
    <WorkExperience
      title={experience.title}
      position={experience.position}
      startDate={experience.startDate}
      endDate={experience.endDate}
    >
      {experience.description[0]} <span class="text-accent2">{experience.description[1]}</span> {experience.description[2]} <span class="text-accent3">{experience.description[3]}</span> {experience.description[4] ?? ""}
    </WorkExperience>
  {/each}
</Card>
