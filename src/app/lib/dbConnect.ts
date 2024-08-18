import mongoose from 'mongoose'


async function dbConnect() {

    try{
               mongoose.connect("mongodb+srv://ashishvishwakarmasoftware:Q6pS9Eb10GSHwFM0@cluster0.5kjem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
               const connection = mongoose.connection;
               connection.on('connected',()=>{
                         console.log("Successfully Connected")

               })

               connection.on('error',(err:any)=>{

                        console.log("Connection fail due to" +{err})
                        process.exit();
               })
               

    }
    catch(error)
    {
        console.log("Connection is failed")

    }
    
}
export default dbConnect;