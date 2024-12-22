import { Prisma, Client as PrismaClient} from "@prisma/client";
import { UniqueEntityID } from "core/entities/unique-entity-id";
import { Client } from "domain/barbershop/enterprise/entities/client";


export class PrismaClientMapper {
    static toDomain(raw: PrismaClient): Client {
        return Client.create(
            {
                id: new UniqueEntityID(raw.id),
                name: raw.name,
                fone: raw.fone,
                password: raw.password,
            },
        )
    }

    static toPrisma(client: Client): Prisma.ClientUncheckedCreateInput {
        return {
            id: client.id.toString(),
            name: client.name,
            fone: client.fone,
            password: client.password
        }
    }
}