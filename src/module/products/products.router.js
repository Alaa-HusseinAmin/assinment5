import express from 'express'
import * as productcontroller from './products.controller.js'


const productRouter = express.Router()
productRouter.post('/',productcontroller.addproduct)
productRouter.get('/',productcontroller.getAllproducts)
productRouter.put('/',productcontroller.updateproduct)
productRouter.delete('/',productcontroller.deleteproduct)
productRouter.get('/searchbyproducts',productcontroller.searchbyproducts)


export default productRouter;