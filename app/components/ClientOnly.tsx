'use client'

import React, { Children, useEffect, useState } from 'react'
import { Interface } from 'readline'

interface ClientOnlyProps{
    children: React.ReactNode
}

const ClientOnly:React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted,setHasMounted] = useState(false)
    useEffect(()=>{
        setHasMounted(true)
    },[])
    if(!hasMounted){
        return null
    } 
       
    
  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly
