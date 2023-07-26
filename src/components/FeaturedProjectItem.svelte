<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
</script>

<!-- //TODO: faded image when text is visible -->
<div
  class="flex flex-col justify-center p-md h-440px bg-cover bg-center rounded-2xl"
  style={`background-image:url(${image})`}
>
  <p class="text-lg text-white text-center p-xs">{title}</p>
  <!-- //TODO: Replace content but do not shrink width -->
  <p class="text-xs text-white">{description}</p>
</div>
