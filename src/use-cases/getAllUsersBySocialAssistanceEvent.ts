import { UserRepository } from '../db-access/UserRepository'
import { getCustomRepository } from 'typeorm'

export default function buildGetAllUsersBySocialAssistanceEvent() {
    return async function getAllUsersBySocialAssistanceEvent(
        socialAssistanceEventId: string
    ) {
        const userRepository = getCustomRepository(UserRepository)
        return userRepository.findBySocialAssistanceEvent(
            socialAssistanceEventId
        )
    }
}
