import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import axios from "axios";

const LoginModal=()=>{

    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = useCallback(async()=>{
        //get data from database and check it
        console.log('onSubmit');
        
        await axios.get('/api/current',{
            //get some data
        })
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
            isOpen = {true}
            title="login account"
            actionLabel="Login"
            onClose={()=>{}}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={<div>Footer</div>}
        />
    )
}
export default LoginModal