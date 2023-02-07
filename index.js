import express from 'express'
import { connectDB } from "./Database/dbconnection.js"
import productRouter from "./src/module/products/products.router.js"
import userRouter from "./src/module/users/users.router.js"
const app = express()
const port = 3000
 connectDB.usermodel.hasOne(productmodelctmodel)
   connectDB.productmodel.belongsTo(usermodelmodel)


app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)
app.get('/', (req, res) => res.send('Hello World!')) 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
