<script lang="ts">
  export let alt: string;
  export let src: string;
  //TODO: Type as a Tailwind class if possible
  export let classExt: string = "";
</script>

<div class={`${classExt} overflow-hidden`}>
  <img class="object-cover w-full h-full" src={src} alt={alt} />
</div>