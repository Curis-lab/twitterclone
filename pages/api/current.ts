import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'GET'){
        console.log('not working');
        return res.status(405).end();
    }
    try{
        console.log('Working');
        return res.status(200).json({'error':'Testing'})
    }
    catch(error){
        console.log('error filed')
        return res.status(400).end();
    }
}