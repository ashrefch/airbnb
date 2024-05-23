'use client'

import { IconType } from "react-icons";

interface articleItemProps{
    title:string;
    icon:IconType
}
const ArticleItem:React.FC<articleItemProps>=({
    title,
    icon:Icon
})=>{
    return(
        <div className="flex flex-row gap-2 items-center cursor-pointer">
            <Icon />
            <div className="text-lg text-[#6A6A6A] font-semibold underline">{title}</div>
        </div>
        
    )
}



export default ArticleItem