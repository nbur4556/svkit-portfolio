<script lang="ts">
  export let classExt: string = "";
  export let classBodyExt: string = "";
  export let testId: string = "";
</script>

<section class={`flex flex-col gap-md p-72px bg-dark rounded-3xl ${classExt}`} data-cy={testId}>
  {#if $$slots.heading}
    <div class="text-white" data-cy={`${testId}-heading`}>
      <slot name="heading" />
    </div>
  {/if}

  <div class={`text-body ${classBodyExt}`} data-cy={`${testId}-content`}>
    <slot />
  </div>
</section>
