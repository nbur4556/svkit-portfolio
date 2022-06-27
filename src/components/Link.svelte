<script lang="ts">
  export let href: string;
  export let external: boolean = false;
  export let styleClass: string = "text-sky-900 hover:text-sky-600";
  export let testId: string = "";

  $: targetAttribute = external ? "_blank" : null;
</script>

<a class={styleClass} {href} target={targetAttribute} data-cy={testId}>
  {#if $$slots.default}
    <slot />
  {:else}
    {href}
  {/if}
</a>
