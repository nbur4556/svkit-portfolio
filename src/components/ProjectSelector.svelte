<script lang="ts">
  export let count: number;

  let selected = 1;
</script>

<section class="flex flex-col items-center">
  <input type="range" value={selected} min={1} max={count}>
  <p class="text-body">0{selected} / 0{count}</p>
</section>