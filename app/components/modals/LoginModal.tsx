'use client'

import axios from 'axios'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import {signIn} from 'next-auth/react'
import { useState } from 'react'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Input'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../Button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'



const LoginModal=()=>{
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    }= useForm<FieldValues>({
        defaultValues:{
            
            email:'',
            password:''
        }
    })
    const onsubmit:SubmitHandler<FieldValues>=(data?)=>{
        setIsLoading(true)
        signIn('credentials',{
            ...data,
            redirect:false
        }).then((callback)=>{
            setIsLoading(false)
            loginModal.onClose()
            if(callback?.ok){
                toast.success('logged in !')
                router.refresh()
                loginModal.onClose
            }
            if(callback?.error) toast.error(callback?.error)
        
        })
        
    }

    const handleToggleLogin=()=>{
       
        loginModal.onClose()
        registerModal.onOpen()
    }

    const bodyContent=(
        <div className='flex flex-col gap-4'> 
            <Heading 
                title='Welcome back !'
                subtitle='log in with your account'
                 />
                 <Input 
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
                
                 <Input 
                id='password'
                label='Password'
                type='password'
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
            onClick={()=>signIn('google')}/>
            <Button
            outline
            label='Continue with Github'
            disabled={isLoading}
            icon={AiFillGithub}
            onClick={()=>signIn('github')} />

            <div className='text-neutral-500 text-center mt-4 font-light '>
                <div className=' justify-center flex flex-row items-center gap-2'>
                <div > You do not have an account ?</div>
                <div onClick={ ()=> handleToggleLogin() } className='text-neutral-800 cursor-pointer hover:underline'>sign in </div>
                </div>
            </div>
        </div>
    )
    return(
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onsubmit)}
            body={bodyContent}
            footer= {footerContent}
        />
    )
}


export default LoginModal