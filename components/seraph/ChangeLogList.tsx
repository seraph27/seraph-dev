'use client'
import { Checkbox } from '../shadcn/checkbox'

const ChangeLogList = ({ text, date }) => {
  return (
    <div className="relative flex flex-col ">
      <div className="mt-3 text-lg leading-normal">
        <Checkbox checked={true} /> {text} ({date})
      </div>
    </div>
  )
}

export default ChangeLogList
