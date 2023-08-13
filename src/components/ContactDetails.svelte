<script lang="ts">
  import Envelope from "../components/SVG/Envelope.svelte";
  import Link from "../components/UI/Link.svelte";
</script>

<section class="flex flex-col">
  <div class="flex flex-row gap-sm">
    <Envelope />
    <h3 class="mb-xs">How Can I Help?</h3>
  </div>
  <ul class="flex flex-col gap-xxs ml-sm lg:text-base text-xs">
    <li>
      <Link class="text-white hover:text-link-200" href="mailto: nbur4556@gmail.com" external>
        nbur4556@gmail.com
      </Link>
    </li>
    <li>
      <Link class="text-white hover:text-link-200" href="https://github.com/nbur4556" external>
        www.github.com/nbur4556
      </Link>
    </li>
    <li>
      <Link
        class="text-white hover:text-link-200"
        href="https://www.linkedin.com/in/nick-burt/"
        external
      >
        www.linkedin.com/in/nick-burt
      </Link>
    </li>
  </ul>
</section>
