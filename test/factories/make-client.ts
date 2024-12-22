import { UniqueEntityID } from "../../src/core/entities/unique-entity-id";
import { Client, ClientProps } from "../../src/domain/barbershop/enterprise/entities/client";


export function MakeClient(
    override: Partial<ClientProps> = {},
    id?: UniqueEntityID    
) {
    const client = Client.create({
        id: new UniqueEntityID(),
        name: "Example",
        fone: "48998482590",
        password: '123456',
        ...override,
    })

    return client
}