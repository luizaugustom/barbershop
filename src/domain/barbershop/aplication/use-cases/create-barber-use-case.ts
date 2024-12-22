import { Injectable } from "@nestjs/common"
import { Either, right } from "../../../../core/either"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { Barber } from "../../enterprise/entities/barber"
import { BarbersRepository } from "../repositories/barbers-repository"

interface CreateBarberRequest {
    id: UniqueEntityID
    name: string
    fone: string 
    password: string
    assessment: []
    about: string
}

type CreateBarberResponse = Either< null ,  { barber: Barber }>

Injectable()
export class CreateBarberUseCase {
    constructor(private barberRepository: BarbersRepository) {}

    async execute({id , name, fone, password,  about} : CreateBarberRequest): Promise<CreateBarberResponse>{
        const barber = Barber.create({
            id: id ??  new UniqueEntityID(id),
            name,
            fone,
            password,
            about,
        })

        await this.barberRepository.create(barber)

        return right( {
            barber
        })
    }
    
}