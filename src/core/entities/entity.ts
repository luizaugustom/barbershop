import { UniqueEntityID } from "./unique-entity-id"


export class Entity<Props> {   //"Props"  nesse lugar é pra criar a tipagem estilo props
    private _id: UniqueEntityID  //"private " para o id não poder ser modificado em outro local
    protected props: Props

    get id(){
        return this._id
    }

    protected constructor(props: Props, id?: UniqueEntityID) {
        this.props = props
        this._id = id ?? new UniqueEntityID()
    }

}