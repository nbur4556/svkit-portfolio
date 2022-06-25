<script lang="ts">
  import type { Project } from "../stores/projectStore";

  export let item: Project;
</script>

<section>
  <h3>{item.title}</h3>
  <p>{item.description}</p>
  <p><a href={item.websiteLink} target="_blank">{item.websiteLink}</a></p>
  <p><a href={item.repoLink} target="_blank">{item.repoLink}</a></p>
</section>
