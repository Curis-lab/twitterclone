import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Input from '../Input';
import axios from 'axios';

const RegisterModal=()=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const onSubmit = useCallback(
    async()=>{
      console.log(email, password, name, username, isLoading);
      await axios.post('/api/register',{
        email,
        password,
        username,
        name
      });
      console.log('onSubmit');
    },[email, password, username, name]); 

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
    <div>
      <p>Already have an account?
        <span className='text-white cursor-pointer hover:underline'>Sign in</span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={false}
      isOpen={false}
      title='create an account'
      actionLabel='Register'
      onClose={()=>{}}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal