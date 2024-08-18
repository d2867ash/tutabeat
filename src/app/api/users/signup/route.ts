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

        if (user){
            return NextResponse.json({
                error:"user already exists"
            }, {status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)


       const newUser = new User({
            username:reqBody.username,
            email:reqBody.email,
            password:hashedPassword

        })
        const savedUser = await newUser.save()
        
        return NextResponse.json
        (
            {savedUser},{status:200}
        
        );


    }
    catch(error:any){
return NextResponse.json({ error:error.toString()},{status:500})
    };
    
}