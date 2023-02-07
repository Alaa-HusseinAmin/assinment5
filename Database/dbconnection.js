import { Sequelize } from 'sequelize';
export const con = new Sequelize('assinment5','root', '', {
    host: 'localhost',
    dialect:'mysql'
  });

  export const connectDB=async()=>{
    return await Sequelize.Sync({alert:true}).then(result=>{
      console.log(`DB connected...............${result}`);
    }).catch(err=>console.log(`Fail to connectDb.................${err}`))
  }