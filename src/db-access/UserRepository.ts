import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async findBySocialAssistanceEvent(socialAssistanceEventId: string) {
        console.log('so::', socialAssistanceEventId)
        return await this.createQueryBuilder('user')
            .leftJoinAndSelect(
                'user.socialAssistanceEvents',
                'socialAssistanceEvents'
            )
            .where('socialAssistanceEvents.id = :id', {
                id: socialAssistanceEventId,
            })
            .getMany()
    }
}
