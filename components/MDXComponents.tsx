import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import ChangeLogList from './seraph/ChangeLogList'
import CodeBlock from './CodeBlock'
import CustomImage from './seraph/CustomImage'
import { ReusableTable } from './seraph/ReusableTable';

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  ChangeLogList,
  CodeBlock,
  CustomImage,
  ReusableTable
}
