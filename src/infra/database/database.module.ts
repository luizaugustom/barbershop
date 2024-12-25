import { PrismaService } from "./prisma/prisma-service";
import { Module } from "@nestjs/common";
import { PrismaClientsRepository } from "./prisma/repositories/prisma-clients-repository";
import { PrismaBarbersRepository } from "./prisma/repositories/prisma-barbers-repository";
import { PrismaSchedulingRepository } from "./prisma/repositories/prisma-scheduling-repository";
import { ClientsRepository } from "domain/barbershop/aplication/repositories/clients-repository";
import { BarbersRepository } from "domain/barbershop/aplication/repositories/barbers-repository";
import { SchedulingRepository } from "domain/barbershop/aplication/repositories/scheduling-repository";


@Module({
    providers: [
        PrismaService,
        {
            provide: ClientsRepository,
            useClass: PrismaClientsRepository,
        },
        {
            provide: BarbersRepository,
            useClass: PrismaBarbersRepository,
        },
        {
            provide: SchedulingRepository,
            useClass: PrismaSchedulingRepository
        },
    ],
    exports: [
        PrismaService,
        ClientsRepository,
        BarbersRepository,
        SchedulingRepository
    ],
})
	
export class DatabaseModule {}