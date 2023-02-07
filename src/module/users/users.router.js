import express from 'express'
import * as usercontroller from './users.controller.js'


const userRouter = express.Router()
userRouter.post('/',usercontroller.adduser)
userRouter.get('/',usercontroller.getAllusers)
userRouter.put('/',usercontroller.updateuser)
userRouter.delete('/',usercontroller.deleteuser)
userRouter.get('/searchbyusers',usercontroller.searchbyusers)
userRouter.get('/searchusers',usercontroller.searchusers)
userRouter.get('/Joinuserproduct',usercontroller.Joinuserproduct)






export default userRouter;