import { Barber } from "../../enterprise/entities/barber";


export abstract class BarbersRepository {
    abstract create(barber: Barber): Promise<void>
    abstract findById(id: string): Promise<Barber | null>
    abstract save(barber: Barber): Promise<void>
}