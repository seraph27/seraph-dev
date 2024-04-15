import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  key: string
}

const Tag = ({ text, key }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      key={key}
      className="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
