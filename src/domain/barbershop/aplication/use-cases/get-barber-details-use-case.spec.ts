import {expect, test, describe, beforeEach} from 'vitest'
import { MakeBarber } from '../../../../../test/factories/make-barber';
import { GetBarberDetailsUseCase } from './get-barber-details-use-case';
import { InMemoryBarbersRepository } from '../../../../../test/repositories/in-memory-barber-repository';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

let inMemoryBarberRepository: InMemoryBarbersRepository
let sut : GetBarberDetailsUseCase

describe('Fetch Barber Barbers ', () => {
    beforeEach(() => {
        inMemoryBarberRepository = new InMemoryBarbersRepository
        sut = new GetBarberDetailsUseCase(inMemoryBarberRepository)
    })

    test('should to be able fetch a  barber barber', async () => {

        const  NewBarber  =  MakeBarber({id: new UniqueEntityID('234'),  name: 'Julio', about: 'conservador', fone:'48991380119'})
        
        await inMemoryBarberRepository.create(NewBarber)
        
        
       const BarberDetails = await sut.execute({
            barberId: '234'
        })

        expect(BarberDetails.value).toEqual({
            BarberName: NewBarber.name,
            BarberAbout: NewBarber.about,
            BarberFone: NewBarber.fone,
            BarberAssessment: NaN
    })
    

    })
})