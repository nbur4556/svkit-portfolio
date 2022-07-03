<script lang="ts">
  export let tooltip: string;
  export let name: string;
  export let size: string = "xl";
  export let styleClass: string = "";
</script>

<i title={tooltip} class={`fa-solid ${name} text-${size} text-slate-200 ${styleClass}`} />
