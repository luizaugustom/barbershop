import { Either, left, right } from "../../../../core/either";
import { ClientsRepository } from "../repositories/clients-repository";
import { ResourceNotFoundError } from "../../../../core/errors/errors/resource-not-found-error";
import { Client } from "../../enterprise/entities/client";
import { promises } from "dns";
import { Injectable } from "@nestjs/common";



interface GetClientDetailsUseCaseRequest {
    clientId: string
}

//type GetClientDetailsUseCaseResponse = Either< null , {clientDetails: {}}>

Injectable()
export class GetClientDetailsUseCase {
    constructor(private clientsRepository: ClientsRepository) {}

    
    async execute ({clientId}:GetClientDetailsUseCaseRequest)/*:  Promise<GetClientDetailsUseCaseResponse>*/ {

        const client = await this.clientsRepository.findById(clientId)
        
        if(!client) {
            return left(new ResourceNotFoundError())
        }
        
        const clientDetails =  {
            ClientFone: client.fone,
            ClientName: client.name,
            ClientAssessment: client.getAssessment
        }
        


        return right(
            clientDetails
        )
    }
}