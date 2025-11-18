import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import Nav from './Nav'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='py-8 xl:py-8 '>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href='/'>
                <h1 className='text-4xl font-semibold text-white'>
                    Cee <span className='text-[var(--color-pink)]'>.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav />

                {/* WhatsApp Redirect */}
                <Link 
                  href="https://wa.me/254715662604?text=Nimefika...%20unaniignore%20ama%20unaniangalia%20tu%20kwa%20corner%3F%20%F0%9F%98%92%F0%9F%98%82%F0%9F%92%9C"
                  target="_blank"
                >
                    <Button>
                        Ping Me
                    </Button>
                </Link>
            </div>

            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
