import { Barber } from "../../enterprise/entities/barber";


export interface BarbersRepository {
    create(barber: Barber): Promise<void>
    findById(id: string): Promise<Barber | null>
    save(barber: Barber): Promise<void>
}