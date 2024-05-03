import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import ToasterProvider from "./providers/ToasterProviders";
import getCurrentUser from "./actions/getCurrentUser";


const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
  }



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser()
  
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ClientOnly>
        <ToasterProvider/>
        
        <RegisterModal/>
        <LoginModal/>
        <RentModal/>
        <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
       
        </body>
    </html>
  );
}
