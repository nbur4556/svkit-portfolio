<script>
  import Card from "../components/Card.svelte";
  import WorkExperience from "../components/WorkExperience.svelte";
</script>

<Card cardClass="w-7/12" headingClass="py-4 px-10" contentClass="p-10" testId="work-experience">
  <h2 slot="heading" id="experience" class="text-2xl font-bold text-slate-100">Work Experience</h2>

  <WorkExperience title="Melodix">
    Developing a full-stack web application for local musicians.
  </WorkExperience>

  <WorkExperience title="WePair">
    Produced a full featured Saas payment system using Stripe and PayPal.
  </WorkExperience>

  <WorkExperience title="Retrospective">
    Developing a full-stack web application for local musicians.
  </WorkExperience>
</Card>
