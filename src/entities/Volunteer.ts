import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export default class Volunteer {
    @PrimaryColumn()
    rut!: number

    @Column()
    name!: string
}
