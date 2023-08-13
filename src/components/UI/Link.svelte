<script lang="ts">
  export let href: string;
  export let external: boolean = false;
  export let testId: string = "";

  let className: string = "text-sky-900 hover:text-sky-600";
  export { className as class };

  $: targetAttribute = external ? "_blank" : null;
</script>

<a class={className} {href} target={targetAttribute} data-cy={testId}>
  {#if $$slots.default}
    <slot />
  {:else}
    {href}
  {/if}
</a>
