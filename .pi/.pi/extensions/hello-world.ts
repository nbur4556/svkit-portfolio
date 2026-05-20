import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { Type } from "typebox";

/**
 * 🚀 PI EXTENSIONS TUTORIAL & HELLO WORLD
 * 
 * This file serves as both a functional "Hello World" extension and a 
 * quick-start guide for developing your own Pi extensions.
 * 
 * === WHERE TO PUT EXTENSIONS ===
 * - Project-local: `.pi/extensions/*.ts` (This file!)
 * - Global: `~/.pi/agent/extensions/*.ts`
 * 
 * Extensions in these directories are auto-discovered. You can hot-reload 
 * them using the `/reload` command in the Pi TUI.
 * 
 * === HOW IT WORKS ===
 * Every extension must export a default function that receives the `ExtensionAPI` object.
 * You use this object to:
 * 1. Subscribe to lifecycle events (`pi.on(...)`)
 * 2. Register custom tools for the LLM (`pi.registerTool(...)`)
 * 3. Register slash commands for the user (`pi.registerCommand(...)`)
 * 4. Define keyboard shortcuts (`pi.registerShortcut(...)`)
 * 5. Add CLI flags (`pi.registerFlag(...)`)
 */

export default function (pi: ExtensionAPI) {
  
  // ---------------------------------------------------------------------------
  // 1. EVENT LISTENERS
  // ---------------------------------------------------------------------------
  // Events allow your extension to react to what's happening in Pi.
  // See documentation for a full list of events (session_start, tool_call, etc.)

  pi.on("session_start", async (_event, ctx) => {
    // ctx.ui provides methods to interact with the user.
    // notify() shows a temporary toast message.
    ctx.ui.notify("👋 Hello World extension loaded!", "info");
    console.log("Hello World extension initialized for session.");
  });

  // ---------------------------------------------------------------------------
  // 2. CUSTOM TOOLS
  // ---------------------------------------------------------------------------
  // Tools are functions the LLM can decide to call.
  // Use 'typebox' to define the schema for tool parameters.

  pi.registerTool({
    name: "say_hello",
    label: "Say Hello",
    description: "A simple tool that greets a user by name.",
    parameters: Type.Object({
      name: Type.String({ description: "The name of the person to greet" }),
    }),
    async execute(toolCallId, params, signal, onUpdate, ctx) {
      // onUpdate allows you to stream progress to the TUI while working
      onUpdate?.({ 
        content: [{ type: "text", text: `Generating a greeting for ${params.name}...` }] 
      });

      return {
        content: [{ type: "text", text: `Hello, ${params.name}! 🌟 This message comes from a custom Pi extension.` }],
        details: { status: "success" },
      };
    },
  });

  // ---------------------------------------------------------------------------
  // 3. SLASH COMMANDS
  // ---------------------------------------------------------------------------
  // Commands are triggered by the user typing /command_name in the prompt.

  pi.registerCommand("hello", {
    description: "Quickly say hello to the world",
    handler: async (args, ctx) => {
      const target = args || "world";
      
      // You can use various UI components:
      // - confirm(): a yes/no dialog
      // - select(): a list selection
      // - input(): a text input field
      const confirmed = await ctx.ui.confirm("Greeting", `Do you want to say hello to ${target}?`);
      
      if (confirmed) {
        ctx.ui.notify(`Hello ${target}! 🚀`, "success");
      } else {
        ctx.ui.notify("Greeting cancelled.", "info");
      }
    },
  });

  // ---------------------------------------------------------------------------
  // 🚀 COMMON WORKFLOWS & TIPS
  // ---------------------------------------------------------------------------
  /*
    - TESTING: 
      You can test an extension without moving it to the folders by running:
      `pi -e ./path/to/extension.ts`

    - HOT RELOADING:
      If you edit this file while Pi is running, just type `/reload` in the TUI.
      Pi will re-run the factory function and apply your changes instantly.

    - UI FEEDBACK:
      - ctx.ui.notify(msg, type): 'info' | 'success' | 'warning' | 'error'
      - ctx.ui.setStatus(id, text): Adds a status item to the footer.
      - ctx.ui.setWidget(id, lines): Adds a widget above the editor.

    - STATE MANAGEMENT:
      If you need to save state that persists across reloads or restarts, 
      use `pi.appendEntry("my-state-key", { data: ... })`.
      You can then retrieve it during `session_start` by iterating over 
      `ctx.sessionManager.getEntries()`.

    - BLOCKING TOOLS:
      You can intercept and block other tools (like 'bash') by listening to 
      the "tool_call" event and returning `{ block: true, reason: "..." }`.
  */
}
