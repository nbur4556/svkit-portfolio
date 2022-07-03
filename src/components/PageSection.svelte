<script lang="ts">
  export let testId: string = "";
</script>

<section
  class="px-4 w-full flex flex-col justify-items-stretch space-y-4 lg:w-7/12 md:px-10"
  data-cy={testId}
>
  <slot />
</section>
