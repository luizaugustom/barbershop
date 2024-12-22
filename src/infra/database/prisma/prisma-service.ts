import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@prisma/client'


@Injectable()
export class PrismaService  extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    findMany(arg0: { where: { barberId: string; }; orderBy: { date: string; }; take: number; skip: number; }) {
        throw new Error("Method not implemented.");
    }
    constructor(){
        super({
            log: ['warn', 'error'],
        })
    }
    onModuleInit() {
        return this.$connect()
    }
    onModuleDestroy() {
        return this.$disconnect()
    }
}