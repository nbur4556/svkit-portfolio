<script lang="ts">
  import Card from "../components/Card.svelte";
  import Link from "../components/Link.svelte";
</script>

<Card testId="contact">
  <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>

  <ul class="my-4">
    <li><Link href="mailto: nbur4556@gmail.com" external>nbur4556@gmail.com</Link></li>
    <li><Link href="https://github.com/nbur4556" external /></li>
    <li><Link href="https://www.linkedin.com/in/nick-burt/" external /></li>
  </ul>
</Card>
