import { sendReply } from "../controllers/web.controllers.js";

// Response Schema
const Response = {
    type: 'object',
    properties: {
        message: { type: 'string' },
        code: { type: 'integer' },
    },
}

const webRoutesOpts = {
    schema: {
        response: {
            200: Response,
        },
    },
    handler: sendReply,
}

async function webRoutes (fastify, options, done) {
    // Root
    fastify.get('/', webRoutesOpts)
}

export { webRoutes }