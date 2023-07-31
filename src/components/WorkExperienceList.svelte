<script lang="ts">
  import Card from "../components/UI/Card.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";

  import type { Experience } from "../stores/experienceStore";

  export let experienceData: Array<Experience>;
</script>

<Card class="mb-lg" classBody="flex flex-col gap-md" testId="work-experience">
  <h2 slot="heading" id="experience" class="text-2xl font-bold">{"> Work Experience"}</h2>

  {#each experienceData as experience}
    <WorkExperience
      title={experience.title}
      position={experience.position}
      startDate={experience.startDate}
      endDate={experience.endDate}
    >
      {#each experience.description as desc, index}
        {#if index % 2 === 0}
          {`${desc} `}
        {:else}
          <span class={((index + 1) / 2) % 2 === 0 ? "text-accent3-400" : "text-accent2"}>
            {`${desc} `}
          </span>
        {/if}
      {/each}
    </WorkExperience>
  {/each}
</Card>
