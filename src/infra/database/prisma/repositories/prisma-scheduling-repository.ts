import { Injectable } from "@nestjs/common";
import { SchedulingRepository } from "domain/barbershop/aplication/repositories/scheduling-repository";
import { PrismaService } from "../prisma-service";
import { Scheduling } from "domain/barbershop/enterprise/entities/scheduling";
import { PaginationParams } from "core/repositories/pagination-params";
import { PrismaSchedulingMapper } from "../mappers/prisma-scheduling-mapper";
import { map } from 'rxjs'
import { PrismaBarberMapper } from "../mappers/prisma-barber-mapper";


@Injectable()
export class PrismaSchedulingRepository implements SchedulingRepository {
    constructor(
        private prisma: PrismaService
    ) {}

    async findById(id: string) {
        const scheduling = await this.prisma.schedulings.findUnique({
            where: {
                id,
            }
        })

        if(!scheduling) {
            return null
        }

        return PrismaSchedulingMapper.toDomain(scheduling)
    }

    async findManyById(barberId: string, {page}: PaginationParams): Promise<Scheduling[]> {
       const schedulings  = await this.prisma.findMany({
        where: {
            barberId
        },
        orderBy: {
            date: 'cresc'
        },
        take: 20,
        skip: (page - 1) * 20
       })


        return [] //Resolver bug
    }


    async create(scheduling: Scheduling): Promise<void> {
       const data = PrismaSchedulingMapper.toPrisma(scheduling)

       await this.prisma.schedulings.create ({data})
        

    }

    async delete(schedulings: Scheduling){
        await this.prisma.schedulings.delete({
            where: {
                id: schedulings.id.toString()
            }
        })
    }
    

}
