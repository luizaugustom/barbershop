import { Client } from "@prisma/client";


export class ClientPresenter {
    static toHTTP(client: Client) {
        return {
            id: client.id,
            name: client.name,
            fone: client.fone,
            password: client.password
        }
    }
}