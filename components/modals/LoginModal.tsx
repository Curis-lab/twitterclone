import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";

const LoginModal=()=>{

    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = useCallback(()=>{
        try{}
        catch(error){
            console.log(error);
        }
    },[])
    const bodyContent=(
        <div>
            <input placeholder="Email"/>
        </div>
    )
    return <div>hello</div>
}
export default LoginModal