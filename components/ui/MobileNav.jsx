"use client";

import { SheetTrigger, Sheet, SheetContent, SheetTitle } from "./sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"

const links = [
    { name: "home", path: "/" },
    { name: "Our Story", path: "/ourStory" },
    { name: "My Promises", path: "/myPromises" },
    { name: "Gallery", path: "/gallery" },
]

function MobileNav() {
    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTrigger className='justify-center items-center flex'>
                <CiMenuFries className="text-[32px] text-[var(--color-pink)]"/>
            </SheetTrigger>

            <SheetContent className='flex flex-col'>

                {/* 🔥 FIX: hidden title required by Radix */}
                <VisuallyHidden>
                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                </VisuallyHidden>

                <div className="mt-32 mb-40 text-center text-2xl"> 
                    <Link href='/' className="text-4xl font-semibold"> 
                        My Purple Lotus <span className="text-[var(--color-pink)]">.</span>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`${
                                link.path === pathName &&
                                "text-[var(--color-pink)] border-b-2 border-[var(--color-pink)]"
                            } text-xl capitalize hover:text-[var(--color-pink)] transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
