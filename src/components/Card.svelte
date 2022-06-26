<script lang="ts">
  export let cardClass: string = "";
  export let headingClass: string = "";
  export let imageClass: string = "";
  export let contentClass: string = "";
</script>

<section class={`rounded overflow-hidden ${cardClass}`}>
  {#if $$slots.heading}
    <div class={`bg-slate-800 ${headingClass}`}>
      <slot name="heading" />
    </div>
  {/if}

  {#if $$slots.image}
    <div class={`bg-slate-200 ${imageClass}`}>
      <slot name="image" />
    </div>
  {/if}

  <div class={`bg-slate-200 ${contentClass}`}>
    <slot />
  </div>
</section>
