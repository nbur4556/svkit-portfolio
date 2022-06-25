<script lang="ts">
  export let href: string;
  export let external: boolean = false;

  $: targetAttribute = external ? "_blank" : null;
</script>

<a class="text-sky-900 hover:text-sky-600" {href} target={targetAttribute}>
  {#if $$slots.default}
    <slot />
  {:else}
    {href}
  {/if}
</a>
