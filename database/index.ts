import { PrismaClient } from "../prisma/prisma-client-js"

const initPrisma = () => {

    return new PrismaClient()

}

export { initPrisma }