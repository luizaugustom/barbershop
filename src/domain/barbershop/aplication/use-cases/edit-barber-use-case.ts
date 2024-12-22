import { left, right } from "../../../../core/either"
import { BarbersRepository } from "../repositories/barbers-repository"
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error"
import { Injectable } from "@nestjs/common"



interface EditBarberUseCaseRequest {
    barberId: string
    fone: string
    about: string
}

Injectable()
export class EditBarberUseCase{
    constructor(private barbersRepository: BarbersRepository) {}


    async execute({
        barberId, fone, about
    }: EditBarberUseCaseRequest){
        const barber = await this.barbersRepository.findById(barberId)

        if(!barber){
            return left(new ResourceNotFoundError())
        }

        barber.setFone = fone
        barber.setAbout = about

        await this.barbersRepository.save(barber)

        return right({})

    }
}