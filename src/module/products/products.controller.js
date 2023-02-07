import { Op } from "sequelize"
import { productmodel } from "../../../model/product.model.js"

// export const joindata = async (req,res)=>{
//     usermodel.hasOne(productmodel)
//     productmodel.belongsTo(usermodel)
// }
const addproduct= async (req, res) => {
    const {pName,pDescription,price,userId}=req.body
        let products=await productmodel.create({pName,pDescription,price,userId})
        res.json({message:"success",products})
    }
    
   const getAllproducts= async (req, res) => {
        let products= await productmodel.findAll()
        res.json({message:"success",products})
        }

        const searchbyproducts= async (req, res) => {
            const {price}=req.body
            let products= await productmodel.findAll(
                {
                    where:{
                         price: {
                         [Op.gt]: 3000
                        } 
                    }
                }
            )
            res.json({message:"success",products})
            }
         
        const updateproduct= async (req, res) => {
            const {id,pName,pDescription,price,userId}=req.body
            let products= await productmodel.update({pName,pDescription,price},{
                where:{
                    id,
                    userId
                }
            })
            if(products[0]){
                res.json({message:"success",products})
            }else{
                res.json({message:"user not found",products})
            }
            }
            
            const deleteproduct=async (req, res) => {
                const {id,userId}=req.body
                let products= await productmodel.destroy({
                    where:{
                        id,
                        userId
                    }
                })
                if(products){
                    res.json({message:"success",products})
                }else{
                    res.json({message:"user not found",products})
                }
                        }
                        export {
    addproduct,
    getAllproducts,
    updateproduct,
    deleteproduct,
    searchbyproducts,
}

