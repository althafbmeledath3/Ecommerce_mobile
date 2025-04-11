import express from "express"

import { addMobile,loadMobile,previewLoad,load_one,edit,delete_data } from "../controllers/mobile-controller.js"
import { addCart } from "../controllers/cart-controller.js"



const mobile_routes = express.Router()

mobile_routes.post('/add',addMobile)

mobile_routes.get('/load',loadMobile)

mobile_routes.get('/loadOne/:id',load_one)

mobile_routes.get('/preview/:id',previewLoad)

mobile_routes.post('/edit/:id',edit)

mobile_routes.get('/delete/:id',delete_data)

mobile_routes.post('/addCart',addCart)

export default mobile_routes