import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { Button } from '@/components/shadcn/button'
import { AnimatedText } from '@/components/AnimatedText'
import { Scroll, ScrollText } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, selfie, email, twitter, linkedin, discord } = content
  //remember to go to contentlayer.config.ts to add path or it will complain

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-32 md:space-y-5">
          <h2 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-indigo-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h2>
          <div className="flex place-items-center text-sm sm:text-">
            <AnimatedText />
          </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center text-wrap">
            <h3 className="pb-8 pt-10 text-3xl font-bold leading-8 tracking-tight text-gray-700 dark:text-indigo-200">
              {name}
            </h3>
            <div className="space-x-2 pb-8">
              {selfie && (
                <Image
                  src={selfie}
                  alt="selfie"
                  width={500}
                  height={500}
                  className="h-40 w-40 rounded-full"
                />
              )}
            </div>
            <div className="flex flex-wrap justify-center space-y-1">
              <span className="me-2 mt-1 rounded bg-indigo-200 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-teal-900 dark:text-indigo-200">
                seraph.dev developer
              </span>
              <span className="me-2 rounded bg-indigo-200 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-teal-900 dark:text-indigo-200">
                {occupation} @ {company}
              </span>
            </div>
            {/* <div className="flex items-center space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="discord" href={`username:${discord}`} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div> */}
          </div>
          {/* text */}
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
          <div className="flex flex-col items-center pt-10">
            <h3 className="pb-8 text-3xl font-bold leading-8 tracking-tight text-gray-700 dark:text-indigo-200">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center space-y-1">
              <span className="me-2 mt-1 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
                C++
              </span>
              <span className="me-2 rounded border border-red-400 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-gray-700 dark:text-red-400">
                Python
              </span>
              <span className="me-2 rounded border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
                Next.js
              </span>
              <span className="me-2 rounded border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-gray-700 dark:text-yellow-300">
                React
              </span>
              <span className="me-2 rounded border border-indigo-400 bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-gray-700 dark:text-indigo-400">
                Tailwind CSS
              </span>
              <span className="me-2 rounded border border-purple-400 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400">
                Linux
              </span>
              <span className="me-2 rounded border border-pink-400 bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-gray-700 dark:text-pink-400">
                C#
              </span>
              <span className="me-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
                .NET
              </span>
              <span className="me-2 rounded border border-red-400 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-gray-700 dark:text-red-400">
                Typescript
              </span>
              <span className="me-2 rounded border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
                Git
              </span>
            </div>
            <div className="mt-10 flex flex-wrap justify-center">
              <Button asChild variant="outline">
                <Link href="https://emerald-vannie-95.tiiny.site/">
                  <ScrollText className="mr-2 h-4 w-4" /> Download my resume!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
