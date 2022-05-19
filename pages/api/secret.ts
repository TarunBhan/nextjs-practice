import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import Jwt from "jsonwebtoken";
const KEY='adasdasdasdasda';
export default function (req:NextApiRequest,res:NextApiResponse){
    const {token}=req.body;

    
    const {admin}= Jwt.verify(token,KEY) as {[KEY: string]:string}
     if(admin)
     {
         res.json({secretAdminCode:12345})
     }
     else{
         res.json({admin:false})
     }
}