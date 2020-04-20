import buildGetUsersBySocialAssistanceEvent from './getUsersBySocialAssistanceEvent'
import { getAllUsersBySocialAssistanceEvent } from '../../../use-cases'

const getUsersBySocialAssistanceEventHandler: any = buildGetUsersBySocialAssistanceEvent(
    {
        getAllUsersBySocialAssistanceEvent,
    }
)

const usersHandler = Object.freeze({
    getUsersBySocialAssistanceEventHandler,
})

export default usersHandler
