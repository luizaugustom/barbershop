import { PaginationParams } from "../../../../core/repositories/pagination-params";
import { Scheduling } from "../../enterprise/entities/scheduling";



export abstract class SchedulingRepository {
    abstract findById(id: string): Promise<Scheduling | null>
    abstract findManyById(barberId: string ,params: PaginationParams): Promise<Scheduling[]>
    abstract create(scheduling: Scheduling): Promise<void>
    abstract delete(scheduling: Scheduling): Promise<void>
}