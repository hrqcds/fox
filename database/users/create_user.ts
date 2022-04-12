import { initPrisma } from ".."
import { Role } from "../../prisma/prisma-client-js"

async function create_user() {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    await db.user.create({
        data: {
            name: "fulano de tal",
            register: "0001",
            role: Role.PRODUCAO
        }
    })

    // --------------------------------------------
    await db.$disconnect()

}

create_user().catch(e => console.log(e))