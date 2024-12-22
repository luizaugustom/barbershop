import { ClientsRepository } from "@/domain/barbershop/aplication/repositories/clients-repository";
import { Client } from "@/domain/barbershop/enterprise/entities/client";


export class InMemoryClientsRepository implements ClientsRepository {
    public items: Client[] = [] 

    async create(client: Client){
        this.items.push(client)
    }

    async  findById(id: string) {
        const client = this.items.find((item) => item.id.toString() === id)

        if (!client) {
            return null
        }

        return client
    }
}