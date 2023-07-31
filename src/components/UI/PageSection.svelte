<script lang="ts">
  export let testId: string = "";
</script>

<section class="flex flex-col" data-cy={testId}>
  <slot />
</section>
