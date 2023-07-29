<script lang="ts">
  export let image: string;
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;

  $: textContent = description !== undefined || title !== undefined;
</script>

<section
  class="w-full h-440px bg-cover bg-center rounded-2xl overflow-hidden"
  style={`background-image:url(${image})`}
>
  <div
    class={`flex flex-col justify-center p-md w-full h-full ${
      textContent ? "bg-dark bg-opacity-90" : null
    }`}
  >
    {#if title}
      <p class="text-lg text-white text-center p-xs">{title}</p>
    {/if}
    {#if description}
      <p class="max-w-xl text-xs text-white">{description}</p>
    {/if}
  </div>
</section>
