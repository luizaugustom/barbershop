import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma-service";
import { z } from "zod";

const CreateAccountSchema = z.object({
    name: z.string(),
    fone: z.string(),
    password: z.string(),
})

type CreateAccountSchema = z.infer<typeof CreateAccountSchema>



@Controller('/accounts')
export class CreateAccountController {
    constructor(private prisma: PrismaService) {}

    @Post()
    @HttpCode(201)
    async handle (@Body() body:CreateAccountSchema) {
        
        const {name , fone, password} = body

        await this.prisma.client.create({
            data: {
                name,
                fone,
                password
            }
        })
    }
}