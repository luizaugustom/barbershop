import {expect, test, describe, beforeEach} from 'vitest'
import { CreateSchedulingUseCase } from './create-scheduling-use-case';
import { InMemorySchedulingRepository } from '../../../../../test/repositories/in-memory-scheduling-repository'; 
import { MakeScheduling } from '../../../../../test/factories/make-scheduling'; 

let inMemorySchedulingRepository: InMemorySchedulingRepository
let sut : CreateSchedulingUseCase

describe('Create Scheduling', () => {
    beforeEach(() => {
        inMemorySchedulingRepository = new InMemorySchedulingRepository
        sut = new CreateSchedulingUseCase(inMemorySchedulingRepository)
    })

    test('should to be able create a scheduling', async () => {

        const  NewScheduling  =  MakeScheduling()
        
        await inMemorySchedulingRepository.create(NewScheduling)

        expect(inMemorySchedulingRepository.items).toHaveLength(1)
    })
})