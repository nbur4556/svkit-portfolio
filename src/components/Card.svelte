<script lang="ts">
  export let styleClass: string = "";
</script>

<section class={`p-4 bg-slate-200 ${styleClass}`}>
  <slot />
</section>
