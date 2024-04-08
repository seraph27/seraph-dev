'use client'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { AnimatedText } from '@/components/AnimatedText'
import React from 'react'
import { ControlPanelItems } from '@/components/seraph/CommandPanelItems'
import { Badge } from '@/components/shadcn/badge'
import Image from 'next/image'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-40 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 text-gray-900 dark:text-indigo-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"></h1>
          <AnimatedText />
          {/* <ControlPanelItems /> */}
          {/* <span><YoutubeEmbed embedId={'xh6Vd34Js-g'}/></span> */}
        </div>
        <ul className="divide-y divide-dashed divide-indigo-600 dark:divide-zinc-600">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-10">
                <div className="flex w-full justify-center gap-1">
                  <Link href={`/blog/${slug}`}>
                    <div className="pointer-events-auto grid w-full grid-cols-5 items-center gap-2 rounded-3xl border-[0.5px] border-zinc-900 hover:bg-zinc-900">
                      <div className="col-span-2 flex justify-center">
                        <Image
                          alt="LOL"
                          src={images[0]}
                          width={500}
                          height={500}
                          style={{ borderRadius: '1.5rem' }}
                        />
                      </div>
                      <div className="col-span-3 my-6 ml-4">
                        <div className="text-base font-medium leading-6 text-gray-500 dark:text-zinc-400 ">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                        <div>
                          <h2 className="pb-1 text-3xl font-bold leading-8">
                            <div className="text-gray-900 dark:text-indigo-200">{title}</div>
                          </h2>
                          <div>
                            <div className="flex flex-wrap space-x-1">
                              {tags.map((tag) => (
                                <Badge
                                  className="flex items-center justify-center bg-zinc-900"
                                  variant="outline"
                                >
                                  <div className="text-center ">
                                    <Tag key={tag} text={tag} />
                                  </div>
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-200">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {/* end of blog posts */}
      {/* <div>
        <img
          className="mx-auto h-auto cursor-pointer rounded-lg grayscale filter transition-all duration-1000 hover:grayscale-0"
          src="/static/images/bg2.png"
          alt="description"
        />
      </div> */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
