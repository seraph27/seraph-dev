'use client'

import Link from './Link'
import { CupSoda, Menu } from 'lucide-react'
import { Button } from './shadcn/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/shadcn/sheet'

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="z-[150]">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <CupSoda className="h-6 w-6" />
                <span className="sr-only">Home</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/blog" className="hover:text-indigo-200">
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/codeforces" className="text-zinc-200 hover:text-indigo-200">
                Codeforces
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/projects" className="text-zinc-200 hover:text-indigo-200">
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/about" className="text-zinc-200 hover:text-indigo-200">
                About
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav
