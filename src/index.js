// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const MongoClient = require('mongodb').MongoClient

const url =
    ' mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb'
// Database name
const dbName = 'test'

const client = new MongoClient(url)

// Declare a route
fastify.get('/', async (request, reply) => {
    await client.connect()
    console.log('Connected correctly to server')
    const db = client.db(dbName)

    // Insert a single document
    let r = await db.collection('example').insertOne({ a: 1 })
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)

        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
