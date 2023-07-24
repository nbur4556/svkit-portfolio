<script lang="ts">
  export let testId: string = "";
</script>

<section class="flex flex-col gap-60px m-10 p-74px bg-dark rounded-3xl" data-cy={testId}>
  {#if $$slots.heading}
    <div class="text-white" data-cy={`${testId}-heading`}>
      <slot name="heading" />
    </div>
  {/if}

  <!-- //TODO: Will we be able to remove the image section? -->
  {#if $$slots.image}
    <div data-cy={`${testId}-image`}>
      <slot name="image" />
    </div>
  {/if}

  <div class="text-body" data-cy={`${testId}-content`}>
    <slot />
  </div>
</section>
