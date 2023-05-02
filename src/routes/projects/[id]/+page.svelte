<!-- //TODO: Include when I have case studies. -->
<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  console.log(data);
</script>

<main>
  <h1>Project: {data.id}</h1>

  <section>
    <h2>Project Case Study</h2>
  </section>
</main>
