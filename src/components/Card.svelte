<script lang="ts">
  export let width: string = "full";
</script>

<section class={`my-4 w-${width} p-4 bg-slate-200`}>
  <slot />
</section>
