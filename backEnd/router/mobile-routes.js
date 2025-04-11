import express from "express"

import { addMobile,loadMobile,previewLoad,load_one,edit } from "../controllers/mobile-controller.js"



const mobile_routes = express.Router()

mobile_routes.post('/add',addMobile)

mobile_routes.get('/load',loadMobile)

mobile_routes.get('/loadOne/:id',load_one)

mobile_routes.get('/preview/:id',previewLoad)

mobile_routes.get('/edit/:id',edit)


export default mobile_routes