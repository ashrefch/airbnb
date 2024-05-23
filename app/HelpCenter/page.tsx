
'use client'
import { MdFreeCancellation, MdOutlineCreditScore } from "react-icons/md"
import ClientOnly from "../components/ClientOnly"
import Container from "../components/Container"
import Heading from "../components/Heading"
import HelpItem from "../components/HelpItem"
import { BsTaxiFrontFill } from "react-icons/bs"
import { IoMdTime } from "react-icons/io"
import { useRouter } from "next/navigation"




const HelpCenter=()=>{
    const router=useRouter()
    return(
        <ClientOnly>
            <Heading title="Hello, how can we help you ?" subtitle="We are here to guide you !" center  />
           <Container>
            <div className="flex flex-row gap-8 items-center justify-evenly mt-10 ">
                <HelpItem title="Cancel Reservation ?" icon={MdFreeCancellation} onClick={()=>router.push('/cancelReservation')}/>
                <HelpItem title="Payment methods ?" icon={MdOutlineCreditScore } onClick={()=>router.push('/cancelReservation')}/>
                <HelpItem title="When should i pay ?" icon={IoMdTime} onClick={()=>router.push('/cancelReservation')}/>
                <HelpItem title="will i get Picked up ?" icon={BsTaxiFrontFill} onClick={()=>router.push('/cancelReservation')}/>
                
            </div>
                
           </Container>
               

           
        </ClientOnly>
        
    )
}

export default HelpCenter