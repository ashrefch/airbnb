'use client'

import { IoIosBookmark } from "react-icons/io"
import Container from "../components/Container"
import ArticleItem from '../components/ArticleItem'
import { BiSolidAdjust } from "react-icons/bi"

const CancelReservation=()=>{
    return(
        <Container>
            <div className="flex flex-col  gap-8 items-start ml-[20%] mr-[20%]    ">
                
                <div className="text-lg text-[#6A6A6A]" >Steps to follow. Trips</div>
                <div className="text-3xl font-sans font-semibold ">Cancel  your reservation trip</div>
                <div className="text-md text-black">Your plans has been changed and you want to cancel your reservation ? No problem</div>
               
                <div className="flex flex-col gap-4">
                <div className="text-[#6A6A6A] text-md font-bold">In this article</div>
                <ArticleItem title="To cancel the reservation" icon={IoIosBookmark}/>
                <ArticleItem title="Verify if you get refund !" icon={IoIosBookmark}/>
                <ArticleItem title="If you canceled because of something went wrong during the reservation" icon={IoIosBookmark}/>
                </div>
                <hr className="border-[1px] border-[#B0B0B0] w-full"/>
                <div className="text-2xl text-black font-semibold">To cancel the reservation:</div>
                <ul className="text-md text-black gap-4 flex-col pl-5">
                    <li>1. Click on <b>Trips</b>, then select the reservation to cancel</li>
                    <li>2. Under <b>details of the reservation</b>, click on <b>cancel the reservation</b></li>
                    <li>3. Pick the reason to cancel your reservation</li>
                    <li>4. Click on <b>Cancel your reservation</b></li>
                </ul>
                <div className="text-2xl text-black font-semibold">Verify if you get refund :</div>
                <div>You can now quickly <b className="cursor-pointer"><u>verify if you have a refund or not</u></b> before canceling your trip</div>
            </div>
           
        </Container>
    )
}


export default CancelReservation