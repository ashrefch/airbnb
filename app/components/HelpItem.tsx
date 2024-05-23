'use client'

import { IconType } from "react-icons";
import Container from "./Container";
import { useCallback, useState } from "react";


interface HelpItemProps{
    title:string;
    icon:IconType;
    onClick:()=>void;
}

const HelpItem:React.FC<HelpItemProps> =({
    title,
    icon:Icon,
    onClick
})=>{
    const [active,setActive] = useState(false)

    const handleToggle=useCallback(()=>{
        setActive((value)=>!value)
        onClick()
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
        cursor-pointer
        hover:text-white
        hover:bg-rose-400
       
        `}>
         <div>{title}</div>
        <Icon size={50}/>
        </div>
           
    )
}

export default HelpItem