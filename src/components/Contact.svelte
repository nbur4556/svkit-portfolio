<script lang="ts">
  import ContactDetails from "../components/ContactDetails.svelte";
  import ContactForm from "../components/ContactForm.svelte";
  import Card from "../components/UI/Card.svelte";
  import PageContent from "../components/UI/PageContent.svelte";
  import ImageContainer from "../components/UI/ImageContainer.svelte";
</script>

<PageContent class="lg:mb-lg">
  <section class="flex lg:flex-row flex-col-reverse justify-between items-center gap-sm">
    <!-- TODO: graphics-update: fix alignment -->
    <ImageContainer
      class="lg:h-xxl lg:visible invisible"
      src="/images/undraw_message-sent.svg"
      alt="Message shown as a paper plane with a checkmark"
    />

    <Card class="lg:max-w-xxl w-full" classBody="text-white" testId="contact">
      <h2 slot="heading" id="contact" class="text-2xl font-bold">{"> Send me a Message"}</h2>
      <ContactForm />
      <ContactDetails />
    </Card>
  </section>
</PageContent>
