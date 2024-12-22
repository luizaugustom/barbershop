import { Prisma, Barber as PrismaBarber} from "@prisma/client";
import { UniqueEntityID } from "core/entities/unique-entity-id";
import { Barber } from "domain/barbershop/enterprise/entities/barber";


export class PrismaBarberMapper {
    static toDomain(raw: PrismaBarber): Barber {
        return Barber.create(
            {
                id: new UniqueEntityID(raw.id),
                name: raw.name,
                fone: raw.fone,
                about: raw.about,
                password: raw.password,
            },
        )
    }

    static toPrisma(barber: Barber): Prisma.BarberUncheckedCreateInput {
        return {
            id: barber.id.toString(),
            name: barber.name,
            fone: barber.fone,
            about: barber.about,
            password: barber.password
        }
    }
}