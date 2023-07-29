<script lang="ts">
  export let image: string;
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
</script>

<!-- //TODO: faded image when text is visible -->
<div
  class="flex flex-col justify-center w-full p-md h-440px bg-cover bg-center rounded-2xl"
  style={`background-image:url(${image})`}
>
  {#if title}
    <p class="text-lg text-white text-center p-xs">{title}</p>
  {/if}
  {#if description}
    <p class="max-w-xl text-xs text-white">{description}</p>
  {/if}
</div>
