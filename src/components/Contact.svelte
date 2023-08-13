<script lang="ts">
  import ContactDetails from "../components/ContactDetails.svelte";
  import ContactForm from "../components/ContactForm.svelte";
  import Card from "../components/UI/Card.svelte";
  import PageContent from "../components/UI/PageContent.svelte";
  import ImageContainer from "../components/UI/ImageContainer.svelte";
</script>

<PageContent class="mb-lg">
  <section class="flex lg:flex-row flex-col-reverse justify-between items-center gap-sm">
    <ImageContainer
      class="lg:h-xxl lg:visible invisible"
      src="/images/mailbox.png"
      alt="Mailbox full of letters shown protruding from a computer screen."
    />

    <Card classBody="text-white" testId="contact">
      <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>
      <ContactForm />
      <ContactDetails />
    </Card>
  </section>
</PageContent>
