import {expect, test, describe, beforeEach} from 'vitest'
import { MakeScheduling } from '../../../../../test/factories/make-scheduling';
import { GetSchedulingDetailsUseCase } from './get-scheduling-details-use-case';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { InMemorySchedulingRepository } from '../../../../../test/repositories/in-memory-scheduling-repository';

let inMemorySchedulingRepository: InMemorySchedulingRepository
let sut : GetSchedulingDetailsUseCase

describe('Fetch Scheduling Schedulings ', () => {
    beforeEach(() => {
        inMemorySchedulingRepository = new InMemorySchedulingRepository
        sut = new GetSchedulingDetailsUseCase(inMemorySchedulingRepository)
    })

    test('should to be able fetch a  scheduling scheduling', async () => {

        const  NewScheduling  =  MakeScheduling({id: new UniqueEntityID('234'),beard: 'null', hair:'normal', date: '05/05/2005', clientId: new UniqueEntityID('1234'), time: '15:00', finishing: 'null', barberId: new UniqueEntityID('456')})
        
        await inMemorySchedulingRepository.create(NewScheduling)
        
        
       const SchedulingDetails = await sut.execute({
            schedulingId: '234'
        })

        expect(SchedulingDetails.value).toEqual({
            SchedulingBarber: NewScheduling.barberId,
            SchedulingBeard: NewScheduling.beard,
            SchedulingDate: NewScheduling.date,
            SchedulingClient: NewScheduling.clientId,
            SchedulingEyeBrow: NewScheduling.eyebrow,
            SchedulingTime: NewScheduling.time,
            SchedulingFinishing: NewScheduling.finishing 
    })
    

    })
})