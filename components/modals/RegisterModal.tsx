import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Input from '../Input';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

const RegisterModal=()=> {

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(()=>{
    if(isLoading){
      return;
    }
    registerModal.onClose();
    
  },[registerModal, isLoading]);

  const onSubmit = useCallback(
    async()=>{
      try{
        setIsLoading(true);
        await axios.post('/api/register',{
          email,
          password,
          username,
          name
        });
        toast.success('Account created');
        signIn('credentials', {
          email,
          password
        });

        //if don't see any error close Register page
        registerModal.onClose()
      }catch(error){
        toast.error('Something went worng');
      }finally{
        setIsLoading(false);
      }
      console.log('onSubmit');
    },[email, password, username, name, registerModal]); 

  const bodyContent =(
    <div className='flex flex-col gap-4'>
      <Input 
      placeholder='Email'
      onChange={e=>setEmail(e.target.value)}
      value={email}
      disabled={isLoading}/>
      <Input 
      placeholder='Name'
      onChange={e=>setName(e.target.value)}
      value={name}
      disabled={isLoading}/>
      <Input 
      placeholder='User Name'
      onChange={e=>setUsername(e.target.value)}
      value={username}
      disabled={isLoading}/>
      <Input 
      placeholder='Password'
      onChange={e=>setPassword(e.target.value)}
      value={password}
      disabled={isLoading}/>
    </div>
  )

  const footerContent =(
    <div className='bg-blue-900'>
      <p>Already have an account?
        <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>Sign in</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='create an account'
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal