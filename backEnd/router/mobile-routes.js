import express from "express"

import { addMobile,loadMobile,previewLoad } from "../controllers/mobile-controller.js"



const mobile_routes = express.Router()

mobile_routes.post('/add',addMobile)

mobile_routes.get('/load',loadMobile)

mobile_routes.get('/preview/:id',previewLoad)


export default mobile_routes