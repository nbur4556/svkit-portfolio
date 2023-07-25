<script lang="ts">
  import Link from "../components/Link.svelte";

  export let name: string;
  export let iconPath: string;
  export let route: string;
  export let testId: string = "";
</script>

<!-- //TODO: Should have a floating label on hover -->
<Link styleClass="bg-dark rounded-full" href={route} external={true} testId={testId}>
  <img class="m-15px w-20px h-20px" src={iconPath} alt={`${name} social media icon`} />
</Link>