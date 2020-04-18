// Require the framework and instantiate it
import fastify from 'fastify'

const server = fastify({ logger: true })
// Declare a route
server.get('/', async (request, reply) => {
    // Insert a single document
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await server.listen(3000)

        server.log.info(`server listening on ${server.server.address()}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start()
