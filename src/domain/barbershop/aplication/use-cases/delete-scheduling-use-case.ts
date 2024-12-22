import { Either, left, right } from "../../../../core/either"
import { SchedulingRepository } from "../repositories/scheduling-repository"
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error"
import { Injectable } from "@nestjs/common"


interface DeleteSchedulingRequest {
    SchedulingId: string
    
}
type  DeleteSchedulingResponse = Either<ResourceNotFoundError, {}>

Injectable()
export class DeleteSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({SchedulingId} : DeleteSchedulingRequest): Promise<DeleteSchedulingResponse>{
        
        const scheduling = await this.schedulingRepository.findById(SchedulingId)

        if (!scheduling) {
            return left(new ResourceNotFoundError())
        }

        await this.schedulingRepository.delete(scheduling)

        return right({})
    }
    
}