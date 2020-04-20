// Require the framework and instantiate it
import fastify from 'fastify'
import { getUsersBySocialAssistanceEventRoute } from './api/routes/users'
import { createConnection } from 'typeorm'
import { User, SocialAssistanceEvent } from './entities'

const createdb = async () => {
    await createConnection({
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        synchronize: true,
        logging: false,
        entities: [User, SocialAssistanceEvent],
    })
}

createdb()

const server = fastify({ logger: true })
// Declare a route
server.get('/', async (request, reply) => {
    // Insert a single document
    return { hello: 'world' }
})

server.register(getUsersBySocialAssistanceEventRoute)
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
