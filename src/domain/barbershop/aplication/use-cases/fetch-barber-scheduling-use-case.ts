import { Injectable } from "@nestjs/common"
import { Either, right } from "../../../../core/either"
import { Scheduling } from "../../enterprise/entities/scheduling"
import { SchedulingRepository } from "../repositories/scheduling-repository"


interface FetchBarberSchedulingRequest {
    barberId: string
    page: number
    
}

type FetchBarberSchedulingResponse = Either< null , { schedulings : Scheduling[] }>
    
Injectable()
export class FetchBarberSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) {}

    async execute({page, barberId} : FetchBarberSchedulingRequest): Promise<FetchBarberSchedulingResponse>{
        
        const  schedulings  = await this.schedulingRepository.findManyById(barberId , {page})


        return  right({schedulings})    
    }
}