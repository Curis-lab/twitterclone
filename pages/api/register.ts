import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        console.log('Not Posting');
        return res.status(405).end();
    }
    try{
        console.log('successfully posted on ');
        const { email, username, name, password } = req.body;
        return res.status(200).json({email, username, name, password })
    }
    catch(error){
        console.log(error);
        return res.status(400).end()
    }
}