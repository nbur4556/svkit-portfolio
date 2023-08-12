<script lang="ts">
  import { enhance } from "$app/forms";
  import type { TypedSubmitFunction } from '$lib/form';
  
  import type { ActionData } from './$types';

  let progressMessage = "";

  const contactHandler: TypedSubmitFunction<ActionData> = () => {
    progressMessage = "...sending";
    return async({ result }) => {
      if (result.type === "success") {
        progressMessage = "Message sent!"
      }
      else {
        progressMessage = "Failed to send message"
      }
    }
  }
</script>

<form method="POST" action="?/contact" use:enhance={contactHandler} class="flex flex-col gap-sm mb-sm">
  <label for="name" class="flex flex-col text-neutral">
    Full Name
    <input name="name" type="text" class="border-b border-neutral p-xs bg-transparent text-white" />
  </label>
  <label for="email" class="flex flex-col text-neutral">
    Email
    <input
      name="email"
      type="email"
      class="border-b border-neutral p-xs bg-transparent text-white"
    />
  </label>
  <label for="phone" class="flex flex-col text-neutral">
    Phone
    <input name="phone" type="tel" class="border-b border-neutral p-xs bg-transparent text-white" />
  </label>
  <label for="message" class="flex flex-col text-neutral">
    Message
    <input
      name="message"
      type="text"
      class="border-b border-neutral p-xs bg-transparent text-white"
    />
  </label>
  <div class="flex flex-row items-center gap-sm">
    <button
      class="self-start px-md py-xs rounded-full bg-gradient-to-r from-accent3-400 to-accent1-400 hover:from-accent3-300 hover:to-accent1-300"
    >
      Send
    </button>
    <p>{progressMessage}</p>
  </div>
</form>
