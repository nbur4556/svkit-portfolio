<script lang="ts">
  export let title: string;
</script>

<section class="my-4">
  <h3 class="text-lg font-bold">{title}</h3>
  <p><slot /></p>
</section>
