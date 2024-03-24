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
    title: 'Codeforces: Blue coder by end of 2024',
    description: `Still far away but on the grind`,
    imgSrc: '/static/images/cp/profile.png',
    href: './codeforces',
    hoverTitle: 'Why competitive programming?',
    hoverDesc: 'In short, competitive programming is a mind sport where people design algorthims to a set of inputs in order to output the correct answer, and it was very inspiring to see people at the highest level being able to visualize complex algorthims effortlessly. \n\nTldr: I want to get good too',
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
