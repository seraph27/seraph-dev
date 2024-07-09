'use client'
import Image from 'next/image'

const CustomImage = ({ imgSrc }) => {
  return (
    <div className="flex justify-center rounded-md leading-normal">
      <div className="rounded-lg">
        {imgSrc ? <Image alt={'asd'} src={imgSrc} width={600} height={600} quality={100} className="rounded-lg"/> : null}
      </div>
    </div>
  )
}

export default CustomImage
