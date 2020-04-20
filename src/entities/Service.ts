import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export default class Service {
    @PrimaryColumn()
    id!: string

    @Column()
    name!: string

    @Column()
    isActive!: boolean
}
