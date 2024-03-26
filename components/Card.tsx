import Image from './Image'
import Link from './Link'
import { CalendarDays } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/shadcn/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/avatar'
import { Button } from './shadcn/button'
import { Loader } from 'lucide-react'

const Card = ({
  title,
  description,
  imgSrc,
  href,
  hoverImgSrc,
  hoverTitle,
  hoverDesc,
  startDate,
}) => (
  <div className="md max-w-[544px] rounded-lg p-4 hover:bg-seraph2-100 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <HoverCard openDelay={150} closeDelay={250}>
            <HoverCardTrigger>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-60"
                width={544}
                height={306}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-90">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={hoverImgSrc} />
                  <AvatarFallback>WHY</AvatarFallback>
                </Avatar>
                <div className="max-w-72 space-y-1">
                  <article className="text-wrap">
                    <p className="text-xl tracking-tight text-indigo-300 opacity-80">
                      {hoverTitle}
                    </p>
                    <p className="max-w-100 whitespace-pre-line text-sm text-zinc-400">
                      {hoverDesc}
                    </p>
                  </article>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                    <span className="text-muted-foreground text-sm">Started {startDate}</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-60"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Button asChild variant="outline">
            <Link href={href}>
              <Loader className="mr-2 h-4 w-4" /> Click to learn more &rarr;
            </Link>
          </Button>
        )}
      </div>
    </div>
  </div>
)

export default Card
