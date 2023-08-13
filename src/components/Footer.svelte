<script lang="ts">
  import SocialLink from "../components/SocialLink.svelte";

  const socialData = [
    {
      name: "GitHub",
      iconPath: "/images/social/github-mark-white.png",
      route: "https://github.com/nbur4556",
    },
    {
      name: "Linked In",
      iconPath: "/images/social/linkedin-mark-white.png",
      route: "https://www.linkedin.com/in/nick-burt/",
    },
    {
      name: "Twitter",
      iconPath: "/images/social/twitter-mark-white.png",
      route: "https://twitter.com/nbur4556",
    },
  ];
</script>

<footer
  class={[
    "flex flex-row justify-between items-center",
    "mb-md max-w-container-lg text-white",
    "lg:w-full gap-sm",
  ].join(" ")}
>
  <p>&copy Copyright 2023</p>

  <section class="flex flex-row gap-xxs">
    {#each socialData as social}
      <SocialLink name={social.name} iconPath={social.iconPath} route={social.route} />
    {/each}
  </section>
</footer>
