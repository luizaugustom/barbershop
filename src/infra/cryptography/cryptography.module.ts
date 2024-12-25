import { Module } from '@nestjs/common'
import { Encrypter } from 'domain/barbershop/aplication/cryptography/encrypter' 
import { HashComparer } from 'domain/barbershop/aplication/cryptography/hasher-compare' 
import { HashGenerator } from 'domain/barbershop/aplication/cryptography/hash-generator' 
import { JwtEncrypter } from './jwt-encrypter'
import { BcryptHasher } from './bcrypt-hasher'

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule {}