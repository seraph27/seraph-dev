interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Blue coder by end of 2024',
    description: `Goal for competitive programming this year get blue rating`,
    imgSrc: '/static/images/cp/profile.png',
    href: 'https://codeforces.com/profile/shiinamashiro_',
  },
  {
    title: 'osu! goal ',
    description: `Trying to get 3 digit in osu! at some point`,
    imgSrc: '/static/images/osu/profile.png',
    href: 'https://osu.ppy.sh/users/13370667',
  },
]

export default projectsData


// href: '/blog/the-time-machine', can link to blog post
