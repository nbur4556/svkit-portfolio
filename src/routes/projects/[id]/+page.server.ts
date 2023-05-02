throw new Error("@migration task: Update +page.server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");

import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = (req) => {
    return {
        status: 200,
        body: {
            id: req.params.id
        }
    }
}