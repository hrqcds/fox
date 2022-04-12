import { initPrisma } from "../../.."
import { SingleSample } from "../../../../prisma/prisma-client-js"
import create_single_sample_type from "./single_sample_type"

async function create_single_sample(): Promise<SingleSample> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const single_sample_type = await create_single_sample_type()

    const single_sample = await db.singleSample.create({
        data: {
            value: "100",
            singleSampleTypeId: single_sample_type.id,
        }
    })

    // --------------------------------------------
    await db.$disconnect()

    return single_sample

}

export default create_single_sample