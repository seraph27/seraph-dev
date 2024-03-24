import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-zinc-600 divide-dashed">
        <div className="space-y-2 pb-8 pt-32 md:space-y-3">
          <h2 className="flex justify-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h2>
          <p className="flex justify-center dark:text-zinc-300 ">These are some of the projects I've done in the past or is currently working on! </p>
          <p className="flex justify-center dark:text-zinc-300 ">Hover on the images to learn more. </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                hoverTitle={d.hoverTitle}
                hoverDesc={d.hoverDesc}
                hoverImgSrc={d.hoverImgSrc}
                startDate={d.startDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
