<script lang="ts">
  export let classBody: string = "";
  export let testId: string = "";

  let className: string = "";
  export { className as class };
</script>

<section
  class={`flex flex-col gap-md lg:px-72px px-sm py-72px bg-dark rounded-3xl ${className}`}
  data-cy={testId}
>
  {#if $$slots.heading}
    <div class="text-white" data-cy={`${testId}-heading`}>
      <slot name="heading" />
    </div>
  {/if}

  <div class={`text-body ${classBody}`} data-cy={`${testId}-content`}>
    <slot />
  </div>
</section>
