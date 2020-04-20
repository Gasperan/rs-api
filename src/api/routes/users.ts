import usersHandler from '../handlers/users/index'

const getUsersBySocialAssistanceEventRoute = async function (
    fastify: any
): Promise<void> {
    fastify.route({
        method: 'GET',
        url: '/v1/users:id',
        schema: {},
        handler: usersHandler.getUsersBySocialAssistanceEventHandler,
    })
}

export { getUsersBySocialAssistanceEventRoute }
