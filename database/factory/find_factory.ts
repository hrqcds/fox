import { initPrisma } from "..";

const find_factory = async () => {

    const db = initPrisma()
    await db.$connect()

    const f = await db.factory.findMany({
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
                                    single_sample: {
                                        select: {
                                            id: true,
                                            value: true,
                                            single_sample_type: {
                                                select: {
                                                    id: true,
                                                    createBy: true,
                                                    unity: true,
                                                    sample_name: true
                                                }
                                            }
                                        }
                                    },
                                    timestamp: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    await db.$disconnect()

    return f

}

export { find_factory }