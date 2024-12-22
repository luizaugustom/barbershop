import {expect, test, describe,beforeEach } from 'vitest'
import { CreateClientUseCase } from './create-client'
import { InMemoryClientsRepository } from '../../../../../test/repositories/in-memory-clients-repository'
import { MakeClient } from '../../../../../test/factories/make-client'



let inMemoryClientsRepository: InMemoryClientsRepository
let sut : CreateClientUseCase

describe('Create Client', () => { 
    beforeEach(() => {
        inMemoryClientsRepository = new InMemoryClientsRepository()
        sut = new CreateClientUseCase(inMemoryClientsRepository)
    })
    
    test('should be able to create a client', async () => {

        const newClient = MakeClient()

        await inMemoryClientsRepository.create(newClient)

        expect(inMemoryClientsRepository.items).toHaveLength(1)
    })

})