'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { ControlPanelItems } from './seraph/CommandPanelItems'

const Header = () => {
  return (
    <header className={"fixed max-w-5xl mx-auto -mt-1 max-h-20 flex items-center bg-slate-200 dark:bg-transparent justify-between z-[1000] inset-1 pr-1 backdrop-blur-sm"}>
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
              className="hidden font-medium text-purple-900 dark:text-purple-200 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
        {/* <ControlPanelItems /> */}
        <SearchButton />
        {/* <ThemeSwitch /> very broken, most likely will stick to 1 theme */}
      </div>
    </header>
  )
}

export default Header
