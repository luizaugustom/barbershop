import { Barber } from "@prisma/client";


export class BarberPresenter {
    static toHTTP(barber: Barber) {
        return {
            id: barber.id.toString(),
            name: barber.name,
            fone: barber.fone,
            about: barber.about,
            password: barber.password,
            
        }
    }
}