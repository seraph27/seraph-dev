'use client'
import { Checkbox } from '../shadcn/checkbox'
import Image from 'next/image'

const ChangeLogList = ({ text, date, imgSrc }) => {
  return (
    <div
      className={`mt-4 flex justify-center space-y-1 ${imgSrc ? 'rounded-md border border-white' : ''}`}
    >
      <div className="mt-3 flex justify-center text-center text-lg leading-normal">
        <div className="">
          <Checkbox checked={true} /> {text} ({date})
          {imgSrc ? (
            <Image alt={'asd'} src={imgSrc} width={600} height={600} quality={100} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ChangeLogList
