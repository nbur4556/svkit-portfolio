<script lang="ts">
  export let tooltip: string;
  export let name: string;
  export let size: string = "xl";
  export let styleClass: string = "";
</script>

<!-- //TODO: Can Icon component be removed? Reused? -->
<!-- //TODO: Can we remove font awesome? -->
<i title={tooltip} class={`fa-solid ${name} text-${size} text-slate-200 ${styleClass}`} />
