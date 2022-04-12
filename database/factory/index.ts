import { initPrisma } from ".."
import { Machine } from "../../prisma/prisma-client-js"
import create_machine from "../machine/machine"

async function create_factory(): Promise<Machine> {

    const db = initPrisma()

    await db.$connect()
    //  ----------------------------------------


    const machine = await create_machine()

    const factory = await db.factory.create({
        data: {
            description: "Linha do robô",
            machine: {
                connect: {
                    id: machine.id
                }
            }
        },
        select: {
            id: true,
            description: true,
            machine: {
                select: {
                    id: true,
                    datalogger: true,
                    CanBeOperateBy: true,
                    insertBy: true,
                    status: true,
                    gears: {
                        select: {
                            id: true,
                            gear_type: {
                                select: {
                                    id: true,
                                    description: true,
                                    name: true,
                                }
                            },
                            samples: {
                                select: {
                                    id: true,
                                    single_sample: true,
                                    timestamp: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    console.log(factory)

    // --------------------------------------------
    await db.$disconnect()

    return machine

}

create_factory().catch(e => console.log(e))