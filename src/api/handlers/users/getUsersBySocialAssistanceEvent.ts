export default function buildGetUsersBySocialAssistanceEvent({
    getAllUsersBySocialAssistanceEvent,
}: {
    getAllUsersBySocialAssistanceEvent: any
}) {
    return async function getUsersHanlder(request: any, reply: any) {
        const id = request.query.id
        console.log('Gasparzinho::', id)
        return await getAllUsersBySocialAssistanceEvent(id)
    }
}
