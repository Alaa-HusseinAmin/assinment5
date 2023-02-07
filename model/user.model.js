import { DataTypes } from "sequelize";
import { con } from "../Database/dbconnection.js";

export const usermodel=con.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    name:{
        type:DataTypes.STRING(100),
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true
    },
    password:{
        type:DataTypes.STRING(100)
    },
    age:{
        type:DataTypes.INTEGER
    },
})

con.sync();