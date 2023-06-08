import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

const serverAuth = async(req: NextApiRequest)=>{
    const session = await getSession({req});
    console.log(session);
}
export default serverAuth