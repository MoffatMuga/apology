"use client";

import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetTitle, 
  SheetClose 
} from "./sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"
import { Button } from "./button";

const links = [
  { name: "home", path: "/" },
  { name: "Our Story", path: "/ourStory" },
  { name: "My Promises", path: "/myPromises" },
  { name: "Gallery", path: "/gallery" },
];

function MobileNav() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="justify-center items-center flex">
        <CiMenuFries className="text-[32px] text-[var(--color-pink)]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">

        <VisuallyHidden>
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
        </VisuallyHidden>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" className="text-4xl font-semibold">
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

        <div className="mt-10 mx-auto">
          <SheetClose asChild>
            <Link
              href="https://wa.me/254715662604?text=Nimefika...%20unaniignore%20ama%20unaniangalia%20tu%20kwa%20corner%3F%20%F0%9F%98%92%F0%9F%98%82%F0%9F%92%9C"
              target="_blank"
            >
              <Button>Ping Me</Button>
            </Link>
          </SheetClose>
        </div>

      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
