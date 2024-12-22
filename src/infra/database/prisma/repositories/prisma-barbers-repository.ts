import { Injectable } from "@nestjs/common";
import { BarbersRepository } from "domain/barbershop/aplication/repositories/barbers-repository";
import { PrismaService } from "../prisma-service";
import { Barber } from "domain/barbershop/enterprise/entities/barber";
import { PrismaBarberMapper } from "../mappers/prisma-barber-mapper";



Injectable()
export class PrismaBarbersRepository implements BarbersRepository {
    constructor(
       private prisma: PrismaService
    ) {}

    async create(barber: Barber): Promise<void> {
        const data = PrismaBarberMapper.toPrisma(barber)

        await this.prisma.barber.create({data})
    }

    async findById(id: string): Promise<Barber | null> {
       
        const barber = await this.prisma.barber.findUnique({
           where : { id,
        }})

        if(!barber){
            return null
        }

        return PrismaBarberMapper.toDomain(barber)
    }
    
    async save(barber: Barber): Promise<void> {
        
        const data = PrismaBarberMapper.toPrisma(barber)

        await Promise.all([
            this.prisma.barber.update({
                where: {
                    id: barber.id.toString(),
                },
                data,
            }),
            
        ])
    }
}