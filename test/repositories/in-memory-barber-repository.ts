import { BarbersRepository } from "@/domain/barbershop/aplication/repositories/barbers-repository"
import { Barber } from "../../src/domain/barbershop/enterprise/entities/barber"

export class InMemoryBarbersRepository implements BarbersRepository {
    public items: Barber[] = [] 

    async create(barber: Barber){
        this.items.push(barber)
    }
    async  findById(id: string) {
        const barber = this.items.find((item) => item.id.toString() === id)

        if (!barber) {
            return null
        }

        return barber
    }

    async save(barber: Barber) {
        const itemIndex = this.items.findIndex((item) => item.id === barber.id)

        this.items[itemIndex] = barber
    }
}