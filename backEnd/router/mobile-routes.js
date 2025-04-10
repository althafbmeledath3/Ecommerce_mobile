import express from "express"

import { addMobile } from "../controllers/mobile-controller.js"



const mobile_routes = express.Router()

mobile_routes.post('/add',addMobile)



export default mobile_routes