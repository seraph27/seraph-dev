import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

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
          <h1 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-teal-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="flex items-center text-wrap flex-col">
            <h3 className="pb-8 pt-10 text-3xl font-bold leading-8 tracking-tight text-gray-700 dark:text-teal-200">{name}</h3>
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
            <span className="bg-indigo-200 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-200">seraph.dev developer</span>
            <span className="bg-indigo-200 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-200">{occupation} @ {company}</span>
                 
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
          <div className="flex flex-col items-center space-x-2 pt-10">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={500}
                height={500}
                className="h-40 w-40"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
