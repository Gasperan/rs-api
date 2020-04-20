import { Entity, PrimaryColumn, Column, JoinTable, ManyToMany } from 'typeorm'
import { User } from '.'

@Entity()
export default class SocialAssistanceEvent {
    @PrimaryColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    city!: string

    @Column()
    country!: string

    @Column()
    startDate!: Date

    @Column()
    endDate!: Date

    @Column()
    isActive!: boolean

    @ManyToMany((type) => User, (user) => user.socialAssistanceEvents)
    users!: User[]
}
