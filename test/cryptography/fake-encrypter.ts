import { Encrypter } from '../../src/domain/barbershop/aplication/cryptography/encrypter'


export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload)
  }
}