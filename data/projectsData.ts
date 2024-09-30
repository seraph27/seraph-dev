interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
  hoverDesc?: string,
  hoverTitle?: string,
  hoverImgSrc?: string,
  startDate?: string,
}

const projectsData: Project[] = [
  {
    title: 'REFACTORING',
    description: ``,
    imgSrc: '/static/images/thumbnails/bg.jpg',
    href: './codeforces',
    hoverTitle: 'Why competitive programming?',
    hoverDesc: 'placeholder',
    hoverImgSrc: '/static/images/cp/fubuki.png',
    startDate: 'January 2024',
  },
  {
    title: 'Wingtone',
    description: `Revamping an old website for the wingtone company (In progress)`,
    imgSrc: '/static/images/cp/wingtone.png',
    href: 'https://wingtone.vercel.app/',
    hoverTitle: 'Website development',
    hoverDesc: 'placeholder',
    hoverImgSrc: '/static/images/cp/profile.png',
    startDate: 'February 2024',
  },
]

export default projectsData


// href: '/blog/the-time-machine', can link to blog post
