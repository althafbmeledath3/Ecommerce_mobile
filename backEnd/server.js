
import express from "express"




//create the server
const app = express()

//make frontend static
app.use(express.static('frontEnd'))