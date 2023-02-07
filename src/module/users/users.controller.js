import { Op } from "sequelize";
import { productmodel } from "../../../model/product.model.js";
import { usermodel } from "../../../model/user.model.js";
const adduser= async (req, res) => {
    const {name,email,password,age}=req.body
    const emailExists = await usermodel.findOne({ where: { email: email } });
if (emailExists ) {
  res.json("Email already registered")
}else{
    let users= await usermodel.create({name,email,password,age})
    res.json({message:"success",users})
}
    }


   const getAllusers= async (req, res) => {
        let users= await usermodel.findAll()
        res.json({message:"success",users})
        }

    
    //error    
    // SELECT users.name AS users, products.PName AS products FROM users LEFT JOIN products ON users.id = products.userId

        const Joinuserproduct  = await usermodel.findOne({ 
            include: [{
              model:productmodel
            }]
          });

  
        const searchbyusers= async (req, res) => {
            const {id}=req.body
            let users= await usermodel.findAll(
                {where:{
                    id: { [Op.in]: [2,3] }
                }}
            )
            res.json({message:"success",users})
            }
            
            
            const searchusers= async (req, res) => {
                const {name,age}=req.body
                let users= await usermodel.findAll(
                    {
                        where:{
                            [Op.and]: [
                                {
                                  name: {
                                   [Op.like]:  'A%'  
                                  }
                                },
                                {
                                age: {
                                  [Op.lt]: 30
                                  }
                                }
                              ]
                        }
                    }
                )

                res.json({message:"success",users})
                }
        

        const updateuser= async (req, res) => {
            const {name,email,password,age,id}=req.body
            let users= await usermodel.update({name,email,password,age},{
                where:{
                    id
                }
            })
            if(users[0]){
                res.json({message:"success",users})
            }else{
                res.json({message:"user not found",users})
            }
            }

            const deleteuser=async (req, res) => {
                const {id}=req.body
                let users= await usermodel.destroy({
                    where:{
                        id
                    }
                })
                if(users){
                    res.json({message:"success",users})
                }else{
                    res.json({message:"user not found",users})
                }
                        }
                        export {
    adduser,
    getAllusers,
    updateuser,
    deleteuser,
    searchbyusers,
    searchusers,
    Joinuserproduct
};

