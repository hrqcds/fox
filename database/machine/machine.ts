import { initPrisma } from ".."
import { Machine } from "../../prisma/prisma-client-js"
import { create_gear } from "./gears/gear"

async function create_machine(): Promise<Machine> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const gear = await create_gear()

    const machine = await db.machine.create({
        data: {
            insertBy: "9999",
            gears: {
                connect: {
                    id: gear.id
                }
            }
        }
    })

    // --------------------------------------------
    await db.$disconnect()

    return machine

}

export default create_machine