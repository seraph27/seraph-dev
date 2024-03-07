import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import YoutubeEmbed from '@/components/VideoEmbed'
import { AnimatedText } from '@/components/AnimatedText'
import { Button } from "@/components/shadcn/button"
const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-indigo-900">
        <div className="space-y-2 pb-8 pt-40 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 text-gray-900 dark:text-indigo-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          </h1>
          <div>
            <Button>Click me</Button>
          </div>
          <div className="pb-4">
            <AnimatedText />
          </div>
          {/* <span><YoutubeEmbed embedId={'xh6Vd34Js-g'}/></span> */}
          {/* <p className="text-xl leading-7 text-gray-500 dark:text-zinc-400">
            {siteMetadata.description}
          </p> */}
          {/* <iframe src="https://plicy.net/GameEmbed/155561" width="900" height="450">漢字でGO!</iframe> */} 
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-indigo-900">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-zinc-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold leading-8 pb-1">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-indigo-200"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-200">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {/* end of blog posts */}
      <div>
        <img
          className="mx-auto h-auto transition-all duration-1000 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="/static/images/bg2.png"
          alt="description"
        />
      </div>

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
