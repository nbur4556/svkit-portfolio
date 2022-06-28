<script lang="ts">
  export let title: string;
  export let startDate: Date;
  export let endDate: Date | undefined = undefined;

  const getMonthDiff = (end: Date, start: Date) => {
    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    return yearDiff * 12 + monthDiff;
  };

  $: monthDiff = getMonthDiff(endDate || new Date(), startDate);
  $: duration = monthDiff >= 12 ? `${Math.round(monthDiff / 12)}y` : `${monthDiff}m`;
</script>

<div>
  <h3 class="text-lg font-bold">
    {title} <span class="font-normal">({duration})</span>
  </h3>
  <p><slot /></p>
</div>
