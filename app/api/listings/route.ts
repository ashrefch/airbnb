import  {NextResponse} from 'next/server'

import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'


export async function POST(
    request:Request
){
    const currentUser= await getCurrentUser()
    if(!currentUser) return NextResponse.error()

        const body=await request.json()

        const {
            title,
            description,
            price,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            location
        }=body

        Object.keys(body).forEach((value:any)=>{
            if(!body[value]){
                NextResponse.error()
            }
        })

        const Listing= await prisma.listing.create({
            data:{
                title,
                description,
                price:parseInt(price,10),
                imageSrc,
                category,
                roomCount,
                guestCount,
                bathroomCount,
                locationValue:location.value,
                userId:currentUser?.id
                


            }
        })
        return NextResponse.json(Listing)
}
  

