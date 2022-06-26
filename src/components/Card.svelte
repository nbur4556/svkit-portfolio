<script lang="ts">
  export let styleClass: string = "";
</script>

<section class={`rounded bg-slate-200 ${styleClass}`}>
  <slot />
</section>
