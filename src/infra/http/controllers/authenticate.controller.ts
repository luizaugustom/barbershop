import { Body, Controller, Post, UnauthorizedException, UsePipes } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { ZodValidationPipe } from "../pipe/zod-validation-pipe"
import { PrismaService } from "../../database/prisma/prisma-service"
import { z } from "zod"



const authenticateBodySchema = z.object ({
	fone: z.string(),
	password: z.string(),
	})
	
	type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>
	
	@Controller('/sessions')
	export class AuthenticateController {
		constructor(
		private prisma: PrismaService,
		private jwt: JwtService ,
		) {}
	
		@Post()
		@UsePipes(new ZodValidationPipe(authenticateBodySchema))
		async handle(@Body() body: AuthenticateBodySchema) {
		
			const { fone, password } = body
			
			const client = await this.prisma.client.findUnique({
			where: {
				fone,
				},
			})
			
			if (!client) {
				throw new UnauthorizedException('User credentialls do not match.')
				}
			
			//const isPasswordValid = await compare(password, client.password)
			
			/*if(!isPasswordValid) {
				throw new UnauthorizedException('User credentialls do not match.')
			}*/
			const accessToken = this.jwt.sign({ sub: client?.id  })
			
			return {
			access_token: accessToken
		 }
            }
        }

function compare(password: string, password1: any) {
    throw new Error("Function not implemented.")
}
