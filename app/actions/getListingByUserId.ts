import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser';

interface IParams{
    userId?:string;
}

export default async function getListingByUserId(
    params:IParams
){
    try{
        const currentUser = await getCurrentUser()
        const listing= await prisma?.listing.findMany({
            where:{
                userId:currentUser?.id
            },
            include:{
                user:true
            }
        })
        if(!listing){
            return null
        }
        return {
            listing
        }
      
    }  catch(error:any){
        throw new Error(error)
    }
}

