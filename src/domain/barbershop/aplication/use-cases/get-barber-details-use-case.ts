import { left, right } from "../../../../core/either";
import { BarbersRepository } from "../repositories/barbers-repository";
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error";
import { Injectable } from "@nestjs/common";



interface GetBarberDetailsUseCaseRequest {
    barberId: string
}



Injectable()
export class GetBarberDetailsUseCase {
    constructor(private barbersRepository: BarbersRepository) {}

    
    async execute ({barberId}:GetBarberDetailsUseCaseRequest) {

        const barber = await this.barbersRepository.findById(barberId)
        if(!barber) {
            return left(new ResourceNotFoundError())
        }
        const barberDetails =  {
            BarberFone: barber.fone,
            BarberName: barber.name,
            BarberAbout: barber.about,
            BarberAssessment: barber.getAssessment
            
        }
        


        return right(
            barberDetails
        )
    }
}