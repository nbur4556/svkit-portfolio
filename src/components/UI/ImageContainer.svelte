<script lang="ts">
  export let alt: string;
  export let src: string;
  let className: string = "";
  export { className as class };
</script>

<div class={`${className} overflow-hidden`}>
  <img class="object-cover w-full h-full" {src} {alt} />
</div>
