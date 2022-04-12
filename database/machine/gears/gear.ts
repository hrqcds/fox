import { initPrisma } from "../.."
import { Gear } from "../../../prisma/prisma-client-js"
import { create_gear_type } from "./gearType"
import create_sample from "./samples/samples"


async function create_gear(): Promise<Gear> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const geartype = await create_gear_type()
    const samples = await create_sample()

    const gear = await db.gear.create({
        data: {
            gear_type: {
                connect: {
                    id: geartype.id
                }
            },
            samples: {
                connect: {
                    id: samples.id
                }
            }
        }
    })

    // --------------------------------------------
    await db.$disconnect()

    return gear

}

export { create_gear }