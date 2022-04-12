import { initPrisma } from "../../.."
import { SingleSampleType } from "../../../../prisma/prisma-client-js"


async function create_single_sample(): Promise<SingleSampleType> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const single_sample_type = await db.singleSampleType.create({
        data: {
            createBy: "999999999",
            sample_name: "temperatura",
            unity: "C"
        }
    })

    await db.singleSampleType.createMany({
        data: [
            { createBy: "999999999", sample_name: "velocidade", unity: "km/g" },
            { createBy: "999999999", sample_name: "distancia", unity: "m" }
        ]
    })

    // --------------------------------------------
    await db.$disconnect()

    return single_sample_type

}

export default create_single_sample