import { getFastifyMock } from '../../../tests-utils/mocks'
import usersHandler from '../../handlers/users'
import { getUsersBySocialAssistanceEventRoute } from '../users'

jest.mock('../../handlers/users', () => ({
    getUsersBySocialAssistanceEventHandler: jest.fn(),
}))

test('should call fastify routes with expected arguments', async () => {
    const fastify = getFastifyMock()

    await getUsersBySocialAssistanceEventRoute(fastify)

    expect(fastify.routes).toHaveBeenCalledWith({
        method: 'GET',
        url: 'v1/users',
        schema: {},
        handler: usersHandler.getUsersBySocialAssistanceEventHandler,
    })
})
