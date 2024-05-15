import EmptyState from "../components/EmptyState";


import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import PropertiesClient from "./PropertiesClient";
import getListing from "../actions/getListing";
import ClientOnly from "../components/ClientOnly";
import getListingById from "../actions/getListingById";


const PropertiesPage=async()=>{
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please login" />
            </ClientOnly>
        )
    }
    const listings = await getListing({
        userId:currentUser?.id
    })
    console.log({listings})
    if(listings?.length ===0){
        return(
            <ClientOnly>
                <EmptyState  title="No properties found" subtitle="Looks like you have no properties"/>
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <PropertiesClient listings={listings} currentUser={currentUser} />
        </ClientOnly>
    )
}

export default PropertiesPage