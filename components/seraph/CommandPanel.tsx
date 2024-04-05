'use client'
import { Button } from '@/components/shadcn/button'
import { PopoverTrigger, PopoverContent, Popover } from '@/components/shadcn/popover'
import { Snowflake, Cog, CloudHail } from 'lucide-react'
import { Toggle } from '@/components/shadcn/toggle'
import React, { useState } from 'react'

interface CommandPanelProps {
  onPressedChange: (pressed: boolean) => boolean // Function to handle pressed change
}

const CommandPanel: React.FC<CommandPanelProps> = ({ onPressedChange }) => {
  const [isToggled, setIsToggled] = useState(new Array(5).fill(false).fill(true, 0, 1))
  const togglePress = (index: number) => {
    setIsToggled((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }
  return (
    <div className="relative inline-flex rounded-lg">
      <Popover>
        <PopoverTrigger>
          <Button className="h-20 w-20 items-center rounded-lg border" size="icon" variant="ghost">
            <Cog className="h-[60px] w-[60px] text-gray-500" />
          </Button>
        </PopoverTrigger>
        <div>
          <PopoverContent
            align="center"
            className="flex w-auto justify-center rounded-lg border p-1"
            side="top"
          >
            <div className="grid h-auto w-auto grid-cols-2 grid-rows-1 gap-1 p-1">
              <Toggle
                className="rounded-md hover:bg-zinc-600 "
                onClick={() => togglePress(0)}
                defaultPressed={isToggled[0]}
                onPressedChange={onPressedChange}
              >
                <Snowflake className="text-blue-200" />
              </Toggle>
              <Toggle
                className="rounded-md hover:bg-zinc-600 "
                onClick={() => togglePress(1)}
                defaultPressed={isToggled[1]}
              >
                <CloudHail className="text-slate-200" />
              </Toggle>
              {/* <Button className="rounded-md" size="icon" variant="ghost">
                <BellIcon className="h-5 w-5" />
                <span className="sr-only">Bell</span>
              </Button>
              <Button className="rounded-md" size="icon" variant="ghost">
                <BookIcon className="h-5 w-5" />
                <span className="sr-only">Book</span>
              </Button>
              <Button className="rounded-md" size="icon" variant="ghost">
                <BookmarkIcon className="h-5 w-5" />
                <span className="sr-only">Bookmark</span>
              </Button>
              <Button className="rounded-md" size="icon" variant="ghost">
                <BoxIcon className="h-5 w-5" />
                <span className="sr-only">Box</span>
              </Button>  */}
            </div>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  )
}

export default CommandPanel
