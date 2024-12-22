import {expect, test, describe,beforeEach } from 'vitest'
import { CreateBarberUseCase } from './create-barber-use-case'
import { InMemoryBarbersRepository } from '../../../../../test/repositories/in-memory-barber-repository'
import { MakeBarber } from '../../../../../test/factories/make-barber'



let inMemoryBarbersRepository: InMemoryBarbersRepository
let sut : CreateBarberUseCase

describe('Create Barber', () => { 
    beforeEach(() => {
        inMemoryBarbersRepository = new InMemoryBarbersRepository()
        sut = new CreateBarberUseCase(inMemoryBarbersRepository)
    })
    
    test('should be able to create a barber', async () => {

        const newBarber = MakeBarber()

        await inMemoryBarbersRepository.create(newBarber)

        expect(inMemoryBarbersRepository.items).toHaveLength(1)
    })

})