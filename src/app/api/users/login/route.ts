import dbConnect  from "@/app/lib/dbConnect"
import { NextResponse, NextRequest } from "next/server";
import User from "@/app/models/usersModels"
import bcryptjs from "bcryptjs"


dbConnect();

export  async function POST(request: NextRequest){

    try
    {
        
        const reqBody = await request.json()
        const {username,email,password}=reqBody
       
        //Check if user already exists
        const user = await User.findOne({email})
        
        
        
        
        const result = await bcryptjs.compare(password,user.password)
        
        if (user.email === reqBody.email && result){
            return NextResponse.json({
                user
            }, {status:200})
        }
        else{
            return NextResponse.json({
                user
            }, {status:400})
        }
       

       

    }
    catch(error:any){
return NextResponse.json({ error:error.toString()},{status:500})
    };
    
}