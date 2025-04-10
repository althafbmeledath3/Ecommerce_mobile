import express from "express"

import { addMobile,loadMobile } from "../controllers/mobile-controller.js"



const mobile_routes = express.Router()

mobile_routes.post('/add',addMobile)

mobile_routes.get('/load',loadMobile)


export default mobile_routes