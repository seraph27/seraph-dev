'use client'
import Image from 'next/image'

const CustomImage = ({ imgSrc, width=600, height=600}) => {
  return (
    <div className="flex justify-center text-center">
      <div className="">
        {imgSrc ? <Image alt={'asd'} src={imgSrc} width={width} height={height} quality={100} className="rounded-lg"/> : null}
      </div>
    </div>
  )
}

export default CustomImage
