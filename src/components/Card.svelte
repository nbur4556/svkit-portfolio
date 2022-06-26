<script lang="ts">
  export let styleClass: string = "";
</script>

<section class={`p-4 rounded bg-slate-200 ${styleClass}`}>
  <slot />
</section>
