// import { on } from 'events';
// import mongoose, {Connection} from 'mongoose';

// let cachedConnection:Connection | null = null

// export async function connectToMongoDB(){
//   if(cachedConnection){
//     console.log("Using cached MONGODB connection")
//     return cachedConnection
  
//   }
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI as string) 
//     cachedConnection = conn.connection;

//     console.log('New mongodb connection established')
//     return cachedConnection;
//   } catch (error) {
//     console.log(error)
//     throw error
// }
// }


import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
}

export default connect; 