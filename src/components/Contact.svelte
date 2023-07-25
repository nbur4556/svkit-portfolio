<script lang="ts">
  import Envelope from "../components/SVG/Envelope.svelte";
  import Card from "../components/UI/Card.svelte";
  import Link from "../components/UI/Link.svelte";
  import ImageContainer from "../components/UI/ImageContainer.svelte";
</script>

<section class="flex flex-row justify-between items-center mb-lg">
  <ImageContainer
    classExt="h-xxl"
    src="/images/mailbox.png"
    alt="Mailbox full of letters shown protruding from a computer screen."
  />

  <Card classBodyExt="text-white" testId="contact">
    <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>

    <!-- //TODO: Working form -->
    <form class="flex flex-col gap-sm mb-sm">
      <label class="flex flex-col text-neutral">
        Full Name
        <input class="border-b border-neutral p-xs bg-transparent text-white" type="text" />
      </label>
      <label class="flex flex-col text-neutral">
        Email
        <input class="border-b border-neutral p-xs bg-transparent text-white" type="email" />
      </label>
      <label class="flex flex-col text-neutral">
        Phone
        <input class="border-b border-neutral p-xs bg-transparent text-white" type="tel" />
      </label>
      <label class="flex flex-col text-neutral">
        Message
        <input class="border-b border-neutral p-xs bg-transparent text-white" type="text" />
      </label>
      <button
        class="self-start px-md py-xs rounded-full bg-gradient-to-r from-accent3-400 to-accent1-400 hover:from-accent3-300 hover:to-accent1-300"
        >Send</button
      >
    </form>

    <div class="flex flex-row gap-sm">
      <Envelope />
      <ul>
        <h3 class="mb-xs">How Can I Help?</h3>
        <li>
          <Link
            styleClass="text-white hover:text-link-200"
            href="mailto: nbur4556@gmail.com"
            external>nbur4556@gmail.com</Link
          >
        </li>
        <li>
          <Link
            styleClass="text-white hover:text-link-200"
            href="https://github.com/nbur4556"
            external
          />
        </li>
        <li>
          <Link
            styleClass="text-white hover:text-link-200"
            href="https://www.linkedin.com/in/nick-burt/"
            external
          />
        </li>
      </ul>
    </div>
  </Card>
</section>
