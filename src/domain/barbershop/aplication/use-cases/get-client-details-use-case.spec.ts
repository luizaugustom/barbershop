import {expect, test, describe, beforeEach} from 'vitest'
import { MakeClient } from '../../../../../test/factories/make-client';
import { GetClientDetailsUseCase } from './get-client-details-use-case';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { InMemoryClientsRepository } from '../../../../../test/repositories/in-memory-clients-repository';

let inMemoryClientsRepository: InMemoryClientsRepository
let sut : GetClientDetailsUseCase

describe('Fetch Client Clients ', () => {
    beforeEach(() => {
        inMemoryClientsRepository = new InMemoryClientsRepository
        sut = new GetClientDetailsUseCase(inMemoryClientsRepository)
    })

    test('should to be able fetch a  client client', async () => {

        const  NewClient  =  MakeClient({id: new UniqueEntityID('234'),  name: 'Julio', fone:'48991380119'})
        
        await inMemoryClientsRepository.create(NewClient)
        
        
       const ClientDetails = await sut.execute({
            clientId: '234'
        })

        expect(ClientDetails.value).toEqual({
            ClientName: NewClient.name,
            ClientFone: NewClient.fone,
            ClientAssessment: undefined
    })
    

    })
})