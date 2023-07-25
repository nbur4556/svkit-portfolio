<script lang="ts">
  export let title: string;
  export let position: string;
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

<section>
  <h3 class="text-lg">
    <span class="font-bold text-accent1-400">{title} -</span>
    {position} ({duration})
  </h3>
  <p><slot /></p>
</section>
