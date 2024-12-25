
import { HashComparer } from 'domain/barbershop/aplication/cryptography/hasher-compare' 
import { HashGenerator } from 'domain/barbershop/aplication/cryptography/hash-generator' 
import { compare, hash } from 'bcryptjs'


export class BcryptHasher implements HashGenerator, HashComparer {
  private HASH_SALT_LENGTH = 8
  hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }
  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}