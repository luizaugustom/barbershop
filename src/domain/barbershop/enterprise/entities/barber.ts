import * as optional from "../../../../core/types/optional"
import { Entity } from "../../../../core/entities/entity"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"

export interface BarberProps {
    id: UniqueEntityID
    name: string
    fone: string
    about: string 
    password: string
    assessment: number[]
}


export class Barber extends Entity<BarberProps>  {

    get id() {
        return this.props.id
    }

    get name() {
        return this.props.name
    }
    get about(){
        return this.props.about
    }
    get password() {
        return this.props.password
    }

    set setAbout(about: string){
        this.props.about = about
    }
    get fone() {
        return this.props.fone
    }
    set setFone(fone: string) {
        this.props.fone = fone
    }
    get getAssessment() {
        if (this.props.assessment != undefined) {
            let numeros = this.props.assessment
            let soma = 0;

            for (let i = 0; i < numeros.length; i++) { soma += numeros[i];  }
            
            return soma / numeros.length            
     }}

    set assessment(Assessment: number ) {
     this.props.assessment.push(Assessment)
    }

static create (props: optional.Optional<BarberProps,'assessment'>, id?: UniqueEntityID) {
        const barber = new Barber({
            ...props,
            assessment: []
        }, id)
        
        return barber
    }


}

 