<script lang="ts">
  export let cardClass: string = "";
  export let headingClass: string = "";
  export let imageClass: string = "";
  export let contentClass: string = "";
  export let testId: string = "";
</script>

<section class={`rounded overflow-hidden ${cardClass}`} data-cy={testId}>
  {#if $$slots.heading}
    <div class={`bg-slate-800 ${headingClass}`} data-cy={`${testId}-heading`}>
      <slot name="heading" />
    </div>
  {/if}

  {#if $$slots.image}
    <div class={`bg-slate-200 ${imageClass}`} data-cy={`${testId}-image`}>
      <slot name="image" />
    </div>
  {/if}

  <div class={`bg-slate-200 ${contentClass}`} data-cy={`${testId}-content`}>
    <slot />
  </div>
</section>
