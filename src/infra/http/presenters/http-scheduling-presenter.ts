import { Scheduling } from "domain/barbershop/enterprise/entities/scheduling";


export class SchedulingPresenter {
    static toHTTP(scheduling: Scheduling) {
        return {
            id: scheduling.id,
            clientId: scheduling.clientId,
            barberId: scheduling.barberId,
            date: scheduling.date,
            time: scheduling.time,
            hair: scheduling.hair,
            beard: scheduling.beard,
            finishing: scheduling.finishing,
            eyebrow: scheduling.eyebrow,
            value: scheduling.value
        }
    }
}