import { createConnection, Connection } from 'typeorm'
import { Volunteer } from '../entities'

export createConnection().then(async (connection) => {
    const volunteerRepository = await connection.getRepository(Volunteer)

    return {
        volunteerRepository,
    }
})
