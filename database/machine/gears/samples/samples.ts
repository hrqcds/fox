import { initPrisma } from "../../.."
import { Samples } from "../../../../prisma/prisma-client-js"
import create_single_sample from "./single_samples"

async function create_sample(): Promise<Samples> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------

    const single_sample = await create_single_sample()

    const sample = await db.samples.create({
        data: {
            single_sample: {
                connect: {
                    id: single_sample.id
                }
            }
        }

    })

    // --------------------------------------------
    await db.$disconnect()

    return sample


}

export default create_sample 