interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Codeforces: Blue coder by end of 2024',
    description: `Still far away but on the grind`,
    imgSrc: '/static/images/cp/profile.png',
    href: './codeforces',
  },
  {
    title: 'Wingtone',
    description: `Revamping an old website for the wingtone company (In progress)`,
    imgSrc: '/static/images/cp/wingtone.png',
    href: 'https://wingtone.vercel.app/',
  },
]

export default projectsData


// href: '/blog/the-time-machine', can link to blog post
