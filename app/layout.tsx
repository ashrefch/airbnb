import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from './components/modals/LoginModal'
import ToasterProvider from "./providers/ToasterProviders";


const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
  }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ClientOnly>
        <ToasterProvider/>
        
        <RegisterModal/>
        <LoginModal/>
        <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
