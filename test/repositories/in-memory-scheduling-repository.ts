import { PaginationParams } from "@/core/repositories/pagination-params";
import { SchedulingRepository } from "@/domain/barbershop/aplication/repositories/scheduling-repository";
import { Scheduling } from "@/domain/barbershop/enterprise/entities/scheduling";


export class InMemorySchedulingRepository implements SchedulingRepository {
    public items: Scheduling[] = [] 
   
   async  findById(id: string) {
        const scheduling = this.items.find((item) => item.id.toString() === id)

        if (!scheduling) {
            return null
        }

        return scheduling
    }

    async findManyById(barberId: string, { page } : PaginationParams){
        
        const schedulings = this.items
            .filter((item) => item.barberId.toString() === barberId)
            .slice((page - 1) * 20, page * 20)

        return schedulings
    }

    async delete(scheduling: Scheduling) {
        const itemIndex = this.items.findIndex((item) => item.id === scheduling.id)

        this.items.splice(itemIndex, 1)
    }
    

    async create(scheduling: Scheduling){
        this.items.push(scheduling)
    }
}