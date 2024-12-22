import { Entity } from "../../../../core/entities/entity"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"

export interface SchedulingProps {
    id: UniqueEntityID
    clientId: UniqueEntityID
    barberId: UniqueEntityID
    date: string
    time: string
    hair: string
    beard: string
    finishing: string
    eyebrow: string
    value: string
}

export class Scheduling extends Entity<SchedulingProps> {
    
    get id() {
        return this.props.id
    }
    get clientId() {
        return this.props.clientId
    }
    get barberId() {
        return this.props.barberId
    }
    get date() {
        return this.props.date
    }
    get time() {
        return this.props.time
    }
    get hair(){
        return this.props.hair
    }

    get beard() {
        return this.props.beard
    }

    get finishing() {
        return this.props.finishing
    }

    get eyebrow() {
        return this.props.eyebrow
    }
    get value(){
        return this.props.value
    }
    

    static create (props: SchedulingProps, id?: UniqueEntityID ) {
        const scheduling = new Scheduling({
            ...props,
        }, id)
        
        return scheduling
    }


}