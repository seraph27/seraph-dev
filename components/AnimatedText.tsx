'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function AnimatedText() {
  const el = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        '🦞 Welcome to seraph.dev! 🦞',
        '☄️ Powered by Next.js and Tailwind CSS ☄️ ',
        '✨ My favorite music artists are Vaundy, Dazbee, LV.4 and Heize ✨',
        '🔥 Some of my hobbies are: competitive programming, gymming, rhythm games and visual novels 🔥',
      ],
      typeSpeed: 55,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
      showCursor: false,
      cursorChar: '',
      shuffle: true,
    }

    const typed = new Typed(el.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <span
      className="flex text-lg box-border min-h-28 sm:text-2xl leading-7 text-zinc-700 dark:text-indigo-300 place-items-center"
      ref={el}
    ></span>
  )
}
