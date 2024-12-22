import {expect, test, describe, beforeEach} from 'vitest'
import { InMemoryBarbersRepository } from '../../../../../test/repositories/in-memory-barber-repository';
import { MakeBarber } from '../../../../../test/factories/make-barber';
import { EditBarberUseCase } from './edit-barber-use-case';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';


let inMemorybarberRepository: InMemoryBarbersRepository
let sut : EditBarberUseCase

describe('Edit barber', () => {
    beforeEach(() => {
        inMemorybarberRepository = new InMemoryBarbersRepository
        sut = new EditBarberUseCase(inMemorybarberRepository)
    })

    test('should to be able edit a barber', async () => {

        const  Newbarber  =  MakeBarber({ id: new UniqueEntityID('123')})

        await inMemorybarberRepository.create(Newbarber)
        

        await sut.execute({
            barberId: '123',
            about: 'aaa',
            fone: '991380119'
        })
        

        expect(inMemorybarberRepository.items[0]).toMatchObject({
            about: 'aaa',
            fone: '991380119'
        })
    })
})