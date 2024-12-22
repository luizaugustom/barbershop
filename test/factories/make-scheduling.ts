
import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { Scheduling,SchedulingProps } from "../../src/domain/barbershop/enterprise/entities/scheduling";


export function MakeScheduling(
    override: Partial<SchedulingProps> = {},
    id?: UniqueEntityID    
) {
    const scheduling = Scheduling.create({
        id: new UniqueEntityID(),
        barberId: new UniqueEntityID(),
        clientId: new UniqueEntityID('123'),
        date: "04/06/2003",
        time: "12:00",
        hair: "degrade",
        beard: "null",
        finishing: "null",
        eyebrow: "sim",
        value: "50,00",
        ...override,
    })

    return scheduling
}