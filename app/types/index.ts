import { Listing, Reservations, User } from "@prisma/client";


export type SafeUser =  Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string,
    updatedAt: string,
    emailVerified: string | null 
}

export type safeListing=Omit<
Listing,
"createdAt"
> & {
    createdAt:string;
}

export type safeReservations=Omit<
Reservations,
"createdAt" |"startDate" | "endDate" | "listing"
> & {
    createdAt:string;
    startDate:string;
    endDate:string;
    listing:safeListing
}
