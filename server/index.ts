import express from "express"
import { find_factory } from "../database/factory/find_factory"

const server = express()

server.use(express.json())

server.get("/factories", async (req, res) => {

    const factories = await find_factory()

    console.log(factories)

    return res.json(factories[0])

})

server.listen(3000, () => {
    console.log("runing in port 3000")
})