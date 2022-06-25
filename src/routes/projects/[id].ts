import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = (req) => {
    return {
        status: 200,
        body: {
            id: req.params.id
        }
    }
}