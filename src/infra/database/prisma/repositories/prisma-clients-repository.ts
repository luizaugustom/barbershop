import { Injectable } from "@nestjs/common";
import { ClientsRepository } from "domain/barbershop/aplication/repositories/clients-repository";
import { PrismaService } from "../prisma-service";
import { Client } from "domain/barbershop/enterprise/entities/client";
import { PrismaClientMapper } from "../mappers/prisma-client-mapper";


Injectable()
export class PrismaClientsRepository implements ClientsRepository {
    constructor (
       private prisma: PrismaService
    ) {}

   async create(client: Client): Promise<void> {
        const data = PrismaClientMapper.toPrisma(client)
        
        await this.prisma.client.create({data})
               
    }
    

    async findById(id: string): Promise<Client | null> {
        const  client = await this.prisma.client.findUnique({
            where: {
                id,
            }
        })

        if(!client){
            return null
        }

        return PrismaClientMapper.toDomain(client)
    }

}