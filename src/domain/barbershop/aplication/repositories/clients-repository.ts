import { Client } from "../../enterprise/entities/client";

export abstract class ClientsRepository {
    abstract create(client: Client): Promise<void>
    abstract findById(id: string): Promise<Client | null>
}