
'use client'
import { MdPayment } from "react-icons/md"
import ClientOnly from "../components/ClientOnly"
import Container from "../components/Container"
import Heading from "../components/Heading"
import HelpItem from "../components/HelpItem"


const HelpCenter=()=>{
    return(
        <ClientOnly>
            <Heading title="Hello, how can we help you ?" subtitle="We are here to guide you !" center  />
           <Container>
            <div className="flex flex-row gap-8 items-center justify-evenly mt-10 ">
                <HelpItem title="Cancel Reservation ?" icon={MdPayment}/>
                <HelpItem title="Cancel Reservation ?" icon={MdPayment}/>
                <HelpItem title="Cancel Reservation ?" icon={MdPayment}/>
                <HelpItem title="Cancel Reservation ?" icon={MdPayment}/>
                
            </div>
                
           </Container>
               

           
        </ClientOnly>
        
    )
}

export default HelpCenter