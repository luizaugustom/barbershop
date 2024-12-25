import { HashComparer } from '../../src/domain/barbershop/aplication/cryptography/hasher-compare'
import { HashGenerator } from '../../src/domain/barbershop/aplication/cryptography/hash-generator'


export class FakeHasher implements HashGenerator, HashComparer {
  async hash(plain: string): Promise<string> {
    return plain.concat('-hashed')
  }
  async compare(plain: string, hash: string): Promise<boolean> {
    return plain.concat('-hashed') === hash
  }
}