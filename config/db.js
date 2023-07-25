import { connect, set } from "mongoose";

const connectDatabase = ()=>{
    connect(process.env.MONGO_URL , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    }).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)    
    })
}

set('strictQuery', false);

export default connectDatabase;
