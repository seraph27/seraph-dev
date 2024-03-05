'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className={"fixed max-w-6xl mx-auto flex items-center bg-slate-200 dark:bg-transparent justify-between h-[90px] z-40 inset-1 pr-1 backdrop-blur-sm"}>
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-6 text-3xl font-semibold sm:block text-purple-900 dark:text-purple-200">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-indigo-200 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
        <SearchButton />
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
