import Fastify from "fastify";
import { webRoutes } from "./src/routes/web.routes.js";

const fastify = Fastify({ logger: true })
fastify.register(webRoutes)

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
await start();