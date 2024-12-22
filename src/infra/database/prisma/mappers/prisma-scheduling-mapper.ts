import { Prisma, Schedulings as PrismaScheduling} from "@prisma/client";
import { UniqueEntityID } from "core/entities/unique-entity-id";
import { Scheduling } from "domain/barbershop/enterprise/entities/scheduling";


export class PrismaSchedulingMapper {
    static toDomain(raw: PrismaScheduling): Scheduling {
        return Scheduling.create(
            {
                id: new UniqueEntityID(raw.id),
                clientId: new UniqueEntityID(raw.clientId),
                barberId: new UniqueEntityID(raw.barberId),
                date: raw.date,
                time: raw.time,
                hair: raw.hair,
                beard: raw.beard,
                finishing: raw.finishing,
                eyebrow: raw.eyebrow,
                value: raw.value
            },
        )
    }

    static toPrisma(scheduling: Scheduling): Prisma.SchedulingsUncheckedCreateInput {
        return {
            id: scheduling.id.toString(),
            clientId: scheduling.clientId.toString(),
            barberId: scheduling.barberId.toString(),
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