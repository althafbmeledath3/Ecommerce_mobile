
import express from "express"
import Connection from "./connection.js"
import path, { dirname,join } from 'path'
import url from "url"

import mobile_routes from "./router/mobile-routes.js"

//create the server
const app = express()

const file_name = url.fileURLToPath(import.meta.url)
let __dirname = dirname(file_name)
let frontEnd = path.join(__dirname,"..","frontEnd")


// //make frontend static
app.use(express.static(frontEnd))
app.use(express.json({limit:"30mb"}))


//addmovie section
app.use('/api',mobile_routes)


//define port number
const port = 3000



//connect database and start server
Connection().then(()=>{
    app.listen(port,()=>{
        console.log("Server Running on port 3000")
    })
})


