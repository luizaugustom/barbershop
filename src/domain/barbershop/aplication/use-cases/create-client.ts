import { Injectable } from "@nestjs/common"
import { Either, right } from "../../../../core/either"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"
import { Client } from "../../enterprise/entities/client"
import { ClientsRepository } from "../repositories/clients-repository"

interface CreateClientUseCaseRequest {
    id?: UniqueEntityID
    name: string
    fone: string
    password: string
    
}

type CreateClientUseCaseResponse = Either < null,  {
    client: Client
}> 

Injectable()
export class CreateClientUseCase {
    constructor(private clientsRepository: ClientsRepository) {}

    async execute({name, fone, password, id} : CreateClientUseCaseRequest): Promise<CreateClientUseCaseResponse> {
          const client = Client.create({
            id: id ??  new UniqueEntityID(id),
            name, 
            fone,
            password,
            
        })

        await this.clientsRepository.create(client)

        return right({
            client,
        })
}
}