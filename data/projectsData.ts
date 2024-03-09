interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Codeforces: Blue coder by end of 2024',
    description: `The grind continues`,
    imgSrc: '/static/images/cp/profile.png',
    href: './codeforces',
  },
  // {
  //   title: 'osu! goal ',
  //   description: `Trying to get 3 digit in osu! at some point`,
  //   imgSrc: '/static/images/osu/profile.png',
  //   href: 'https://osu.ppy.sh/users/13370667',
  // },
]

export default projectsData


// href: '/blog/the-time-machine', can link to blog post
