'use client'

import { IconType } from "react-icons";
import Container from "./Container";
import { useCallback, useState } from "react";


interface HelpItemProps{
    title:string;
    icon:IconType
}

const HelpItem:React.FC<HelpItemProps> =({
    title,
    icon:Icon
})=>{
    const [active,setActive] = useState(false)

    const handleToggle=useCallback(()=>{
        setActive((value)=>!value)
    },[])

    return(
        <div 
        onClick={handleToggle}
        className={`
        flex
        flex-col
        gap-8
        items-center
        justify-center
        border-[1px]
        rounded-lg
        p-4
        mt-8
        cursor-help
        ${active ? 'text-white':'text-black'}
        ${active ? 'bg-rose-500':'bg-white'}
        `}>
         <div>{title}</div>
        <Icon size={50}/>
        </div>
           
    )
}

export default HelpItem