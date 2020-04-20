import { Entity, PrimaryColumn, Column, JoinTable, ManyToMany } from 'typeorm'
import { SocialAssistanceEvent } from '.'

@Entity()
export default class User {
    @PrimaryColumn()
    rut!: string

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    birthDay!: Date

    @Column()
    address!: string

    @Column()
    city!: string

    @Column()
    phone!: string

    @Column()
    isActive!: boolean

    @ManyToMany(
        (type) => SocialAssistanceEvent,
        (socialAssistanceEvent) => socialAssistanceEvent.users
    )
    @JoinTable()
    socialAssistanceEvents!: SocialAssistanceEvent[]
}
