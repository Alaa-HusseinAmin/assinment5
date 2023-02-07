import { DataTypes } from "sequelize";
import { con } from "../Database/dbconnection.js";
export const productmodel=con.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    pName:{
        type:DataTypes.STRING(100),
    },
    pDescription:{
        type:DataTypes.STRING(200)
    },
    price:{
        type:DataTypes.DECIMAL
    },
});
//   usermodel.associate = (models) => {

//     usermodel.hasOne(models.productmodel, {
//       as: 'usermodel',
//       foreignKey: 'userId'
//     });
//    productmodel.belongsTo(models.usermodel, {
//       as: 'productmodel',
//       foreignKey: 'id'
//     });
//   };


con.sync();