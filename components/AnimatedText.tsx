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
        '✨ My favorite music artists are Vaundy, Dazbee, LV.4, Heize ✨',
        '🔥 Some of my hobbies are: competitive programming, gym, language learning, rhythm games 🔥',
      ],
      typeSpeed: 37,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      shuffle: true,
    }

    const typed = new Typed(el.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return <span className="text-2xl leading-7 text-zinc-700 dark:text-indigo-300" ref={el}></span>
}
