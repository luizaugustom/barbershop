import { Injectable } from "@nestjs/common";
import { left, right } from "../../../../core/either";
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error";
import { Scheduling } from "../../enterprise/entities/scheduling";
import { SchedulingRepository } from "../repositories/scheduling-repository";



interface GetSchedulingDetailsUseCaseRequest {
    schedulingId: string
}



Injectable()
export class GetSchedulingDetailsUseCase {
    constructor(private schedulingsRepository: SchedulingRepository) {}

    
    async execute ({schedulingId}:GetSchedulingDetailsUseCaseRequest) {

        const scheduling = await this.schedulingsRepository.findById(schedulingId)
        if(!scheduling) {
            return left(new ResourceNotFoundError())
        }
        const schedulingDetails =  {
            SchedulingBarber: scheduling.barberId,
            SchedulingBeard: scheduling.beard,
            SchedulingDate: scheduling.date,
            SchedulingClient: scheduling.clientId,
            SchedulingEyeBrow: scheduling.eyebrow,
            SchedulingTime: scheduling.time,
            SchedulingFinishing: scheduling.finishing 
        }
        


        return right(
            schedulingDetails
        )
    }
}