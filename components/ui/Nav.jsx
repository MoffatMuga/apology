'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "Our Story",
        path: "/ourStory"
    },

    {
        name: "My Promises",
        path: "/myPromises"
    },
    {
        name: "Gallery",
        path: "/gallery"
    },

]
function Nav() {
    const pathName = usePathname
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`
                ${link.path === pathName ? 'text-[var(--color-pink)] border-b-3 border-[var(--color-pink)]' : ''}
                border-transparent hover:text-[var(--color-pink)] transition
                `}>
                {link.name}
            </Link>
        })}
    </nav>
  )
}

export default Nav