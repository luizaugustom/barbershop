import { Entity } from "../../../../core/entities/entity"
import { UniqueEntityID } from "../../../../core/entities/unique-entity-id"

interface BarberAdminProps{
    id: UniqueEntityID
    name: string
    fone: string
    password: string
}

export class BarberAdmin extends Entity<BarberAdminProps> {

    get name() {       // Usar isso para poder acessar o "name"  em outro local da aplicação  
        return this.props.name     // OU Usar o "set" para poder alterar algo em outro local da aplicação
    }
    

}