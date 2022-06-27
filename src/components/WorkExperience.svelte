<script lang="ts">
  export let title: string;
  export let timeframe: string;
</script>

<div>
  <h3 class="text-lg font-bold">{title} <span class="font-normal">({timeframe})</span></h3>
  <p><slot /></p>
</div>
