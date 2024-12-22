import { PaginationParams } from "../../../../core/repositories/pagination-params";
import { Scheduling } from "../../enterprise/entities/scheduling";



export interface SchedulingRepository {
    findById(id: string): Promise<Scheduling | null>
    findManyById(barberId: string ,params: PaginationParams): Promise<Scheduling[]>
    create(scheduling: Scheduling): Promise<void>
    delete(scheduling: Scheduling): Promise<void>
}