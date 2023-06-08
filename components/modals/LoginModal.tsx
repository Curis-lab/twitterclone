import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import {signIn} from 'next-auth/react';
import { toast } from "react-hot-toast";

const LoginModal=()=>{

    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = useCallback(async()=>{
        //get data from database and check it
        console.log('onSubmit');
        
        try{
            await signIn('credentials',{email, password});
        }catch(error){
            console.log(error);
            toast.error('something went wrong');
        }finally{
            setIsLoading(false);
        }

    },[email, password]) 
    const bodyContent=(
        <div className='flex flex-col gap-4'>
            <Input 
            placeholder='Email'
            onChange={e=>setEmail(e.target.value)}
            value={email}
            disabled={isLoading}/>
            <Input 
            placeholder='Password'
            onChange={e=>setPassword(e.target.value)}
            value={password}
            disabled={isLoading}/>
        </div>
    )
    return(
        <Modal
            disabled={false}
            isOpen = {false}
            actionLabel="Login"
            onClose={()=>{}}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={<div>Footer</div>}
        />
    )
}
export default LoginModal