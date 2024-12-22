import {expect, test, describe, beforeEach} from 'vitest'
import { DeleteSchedulingUseCase } from './delete-scheduling-use-case';
import { InMemorySchedulingRepository } from '../../../../../test/repositories/in-memory-scheduling-repository';
import { MakeScheduling } from '../../../../../test/factories/make-scheduling';


let inMemorySchedulingRepository: InMemorySchedulingRepository
let sut : DeleteSchedulingUseCase

describe('Delete Scheduling', () => {
    beforeEach(() => {
        inMemorySchedulingRepository = new InMemorySchedulingRepository
        sut = new DeleteSchedulingUseCase(inMemorySchedulingRepository)
    })

    test('should to be able delete a scheduling', async () => {

        const  NewScheduling  =  MakeScheduling()

        const  NewScheduling2  =  MakeScheduling()
        
        await inMemorySchedulingRepository.create(NewScheduling)
        await inMemorySchedulingRepository.create(NewScheduling2)

        await sut.execute({
            SchedulingId: NewScheduling.id.toString()
        })
        

        expect(inMemorySchedulingRepository.items).toHaveLength(1)
    })
})