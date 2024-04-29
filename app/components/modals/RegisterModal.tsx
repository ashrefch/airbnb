'use client'

import axios from 'axios'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import { useState } from 'react'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Input'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../Button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import useLoginModal from '@/app/hooks/useLoginModal'



const RegisterModal=()=>{
    const registerModal = useRegisterModal()
    const loginModal= useLoginModal()

    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    }= useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })
    const onsubmit:SubmitHandler<FieldValues>=(data?)=>{
        setIsLoading(true)
        axios.post("/api/register",data)
        .then(()=> {
            setIsLoading(false)
                registerModal.onClose()
                toast.success('Account created successfully !')
                loginModal.onOpen()
            
        })
        .catch((error)=>{
           toast.error("Something went wrong !")
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const handleToggleRegister=()=>{
       
        loginModal.onOpen()
        registerModal.onClose()
    }

    const bodyContent=(
        <div className='flex flex-col gap-4'> 
            <Heading 
                title='Welcome to Airbnb !'
                subtitle='Create an account'
                 />
                 <Input 
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
                 <Input 
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
                 <Input 
                id='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
                 
        </div>
    )
    const footerContent=(
        <div 
        className='
        flex flex-col gap-4 mt-3
        '>
            <hr/>
            <Button
            outline
            label='Continue with google'
            disabled={isLoading}
            icon={FcGoogle}
            onClick={()=>{}}/>
            <Button
            outline
            label='Continue with Github'
            disabled={isLoading}
            icon={AiFillGithub}
            onClick={()=>{}} />

            <div className='text-neutral-500 text-center mt-4 font-light '>
                <div className=' justify-center flex flex-row items-center gap-2'>
                <div > Already have an account ?</div>
                <div onClick={()=>handleToggleRegister()} className='text-neutral-800 cursor-pointer hover:underline'>Log in </div>
                </div>
            </div>
        </div>
    )
    return(
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onsubmit)}
            body={bodyContent}
            footer= {footerContent}
        />
    )
}


export default RegisterModal