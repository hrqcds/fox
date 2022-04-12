import { initPrisma } from "../.."
import { GearType } from "../../../prisma/prisma-client-js"


async function create_gear_type(): Promise<GearType> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const geartype = await db.gearType.create({
        data: {
            name: "Sensor A",
            description: "Responsável por analisar dados"
        }
    })

    // --------------------------------------------
    await db.$disconnect()

    return geartype

}

export { create_gear_type }