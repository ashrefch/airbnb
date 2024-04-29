"use client"

import Container from "../Container"


import {TbBeach, TbMountain, TbPool} from "react-icons/tb"
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi"
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'
import {IoDiamond} from 'react-icons/io5'
import {MdOutlineVilla} from "react-icons/md"
import CategoryBox from "./CategoryBox"
import {  usePathname, useSearchParams } from "next/navigation"

export const categories=[
    {
        label:"Beach",
        icon:TbBeach,
        description:"This property is close to the beach !"
    },
    {
        label:"WindMills",
        icon:GiWindmill,
        description:"This property is close to the beach !"
    },
    {
        label:"Modern",
        icon:MdOutlineVilla,
        description:"This property is Modern !"
    },
    {
        label:"Countryside",
        icon:TbMountain,
        description:"This property is in countryside !"
    },
    {
        label:"Pools",
        icon:TbPool,
        description:"This property has a pool !"
    },
    {
        label:"Islands",
        icon:GiIsland,
        description:"This property is an Island !"
    },
    {
        label:"Lake",
        icon:GiBoatFishing,
        description:"This property is in Lake !"
    },
    {
        label:"Skiing",
        icon:FaSkiing,
        description:"This property has skiing activities!"
    },
    {
        label:"Castle",
        icon:GiCastle,
        description:"This property is a castle!"
    },
    {
        label:"Camping",
        icon:GiForestCamp,
        description:"This property is a castle!"
    },
    {
        label:"Arctic",
        icon:BsSnow,
        description:"This property is in snowy place"
    },
    {
        label:"Cave",
        icon:GiCaveEntrance,
        description:"This property is in a cave"
    },
    {
        label:"Desert",
        icon:GiCactus,
        description:"This property is in a desert"
    },
    {
        label:"Barns",
        icon:GiBarn,
        description:"This property is  a Barn"
    },
    {
        label:"Lux",
        icon:IoDiamond,
        description:"This property is  a luxuruous"
    }
]

const Categories=()=>{

    const params=useSearchParams()
    const pathname= usePathname()
    const category=params?.get('category')

    const isMainPage=pathname==='/'
    if(!isMainPage) return null


    return(
       <Container>
        <div className="
         pt-4
         flex
         flex-row
         items-center
         justify-between
         overflow-x-auto
        ">
        {categories?.map((item)=>(
                <CategoryBox
                 key={item.label}
                 label={item.label}
                 selected={category===item.label}
                 icon={item.icon}
                />
            ))
        }
        </div>
       </Container>
    )
}

export default Categories