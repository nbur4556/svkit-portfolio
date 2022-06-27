<script lang="ts">
  export let title: string;
</script>

<div class="my-4">
  <h3 class="text-lg font-bold">{title}</h3>
  <p><slot /></p>
</div>
