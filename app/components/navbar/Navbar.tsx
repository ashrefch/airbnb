
import React from 'react'
import Container from '../Container'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='fixed z-10 w-full bg-white shadow-sm'>
     <div className='py-4 border-b-[1px]'>
        <Container>
           <Logo/>
        </Container>
     </div>
    </div>
  )
}

export default Navbar
