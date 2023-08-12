<script lang="ts">
  import ContactForm from "../components/ContactForm.svelte";
  import Envelope from "../components/SVG/Envelope.svelte";
  import Card from "../components/UI/Card.svelte";
  import Link from "../components/UI/Link.svelte";
  import ImageContainer from "../components/UI/ImageContainer.svelte";
</script>

<section class="flex flex-row justify-between items-center gap-sm mb-lg">
  <ImageContainer
    classExt="h-xxl"
    src="/images/mailbox.png"
    alt="Mailbox full of letters shown protruding from a computer screen."
  />

  <Card classBody="text-white" testId="contact">
    <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>

    <ContactForm />

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
