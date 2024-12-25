import { Module } from '@nestjs/common'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { PrismaService } from '../database/prisma/prisma-service'
import { DatabaseModule } from '../database/database.module'
import { CreateBarberUseCase } from 'domain/barbershop/aplication/use-cases/create-barber-use-case'
import { CreateSchedulingUseCase } from 'domain/barbershop/aplication/use-cases/create-scheduling-use-case'
import { CreateClientUseCase } from 'domain/barbershop/aplication/use-cases/create-client'
import { DeleteSchedulingUseCase } from 'domain/barbershop/aplication/use-cases/delete-scheduling-use-case'
import { EditBarberUseCase } from 'domain/barbershop/aplication/use-cases/edit-barber-use-case'
import { FetchBarberSchedulingUseCase } from 'domain/barbershop/aplication/use-cases/fetch-barber-scheduling-use-case'
import { GetBarberDetailsUseCase } from 'domain/barbershop/aplication/use-cases/get-barber-details-use-case'
import { GetClientDetailsUseCase } from 'domain/barbershop/aplication/use-cases/get-client-details-use-case'
import { GetSchedulingDetailsUseCase } from 'domain/barbershop/aplication/use-cases/get-scheduling-details-use-case'
import { CryptographyModule } from 'infra/cryptography/cryptography.module'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
  ],
  providers: [PrismaService,
    CreateBarberUseCase,
    CreateClientUseCase,
    CreateSchedulingUseCase,
    DeleteSchedulingUseCase,
    EditBarberUseCase,
    FetchBarberSchedulingUseCase,
    GetBarberDetailsUseCase,
    GetClientDetailsUseCase,
    GetSchedulingDetailsUseCase
  ],
})
export class HttpModule {}