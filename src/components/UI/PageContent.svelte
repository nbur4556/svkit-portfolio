<script lang="ts">
  let className: string = "";
  export { className as class };
</script>

<section class={`${className} flex flex-col max-w-container-lg w-[80vw]`}>
  <slot />
</section>
