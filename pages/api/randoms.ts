  import { NextApiRequest, NextApiResponse } from "next";
  import React from "react";

  export default function (req: NextApiRequest, res: NextApiResponse) {
    // console.log('REQUEST BODY',req.query); 
    
    // res.setHeader('set-cookie','areYou a programmer = true'); 
    // res.statusCode=404
    res.end('ended')
    res.json({ num:Math.floor(Math.random() *10)});
  }
