<script lang="ts">
  let className: string = "";
  export { className as class };
</script>

<section class={`${className} flex flex-col lg:max-w-container-lg max-w-container-sm`}>
  <slot />
</section>
