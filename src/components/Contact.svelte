<script lang="ts">
  import Card from "../components/Card.svelte";
  import Link from "../components/Link.svelte";
  import Envelope from "../components/SVG/Envelope.svelte";
  import ImageContainer from "../components/UI/ImageContainer.svelte";
</script>

<section class="flex flex-row justify-between items-center mb-150px">
  <ImageContainer
    classExt="h-527px"
    src="/images/mailbox.png"
    alt="Mailbox full of letters shown protruding from a computer screen."
  />

  <Card classBodyExt="text-white" testId="contact">
    <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>

    <!-- //TODO: Working form -->
    <form class="flex flex-col mb-42px">
      <label class="flex flex-col my-26px text-neutral">
        Full Name
        <input class="border-b border-neutral p-15px bg-transparent text-white" type="text" />
      </label>
      <label class="flex flex-col my-26px text-neutral">
        Email
        <input class="border-b border-neutral p-15px bg-transparent text-white" type="email" />
      </label>
      <label class="flex flex-col my-26px text-neutral">
        Phone
        <input class="border-b border-neutral p-15px bg-transparent text-white" type="tel" />
      </label>
      <label class="flex flex-col my-26px text-neutral">
        Message
        <input class="border-b border-neutral p-15px bg-transparent text-white" type="text" />
      </label>
      <button
        class="self-start px-40px py-12px rounded-full bg-gradient-to-r from-accent3-400 to-accent1-400 hover:from-accent3-300 hover:to-accent1-300"
        >Send</button
      >
    </form>

    <div class="flex flex-row gap-25px">
      <Envelope />
      <ul>
        <h3 class="mb-18px">How Can I Help?</h3>
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
