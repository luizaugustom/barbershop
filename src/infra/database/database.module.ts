import { PrismaService } from "./prisma/prisma-service";
import { Module } from "@nestjs/common";
import { PrismaClientsRepository } from "./prisma/repositories/prisma-clients-repository";
import { PrismaBarbersRepository } from "./prisma/repositories/prisma-barbers-repository";
import { PrismaSchedulingRepository } from "./prisma/repositories/prisma-scheduling-repository";


@Module({
    providers: [
        PrismaService,
        PrismaClientsRepository,
        PrismaBarbersRepository,
        PrismaSchedulingRepository
    ],
    exports: [
        PrismaService,
        PrismaClientsRepository,
        PrismaBarbersRepository,
        PrismaSchedulingRepository
    ],
})
	
export class DatabaseModule {}