'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function AnimatedText() {
    const el = useRef(null)
  
    useEffect(() => {
      const options = {
        strings: [
          '🦞　Welcome to seraph.dev! 🦞',
          '．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．',
          '☄️ Powered by Next.js and Tailwind CSS ☄️ ',
          '✨思い出せないと泣くくらいなら，ただ僕らを包めよ夏霞，さよならが痛いのは知っていた✨',
          '🔥 Fpeng kitten にゃん 🔥'
        ],
        typeSpeed: 37,
        backSpeed: 10,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      }
  
      const typed = new Typed(el.current, options)
      return () => {
        typed.destroy()
      }
    }, [])
  
    return (
        <span className="text-2xl leading-7 text-zinc-700 dark:text-indigo-300" ref={el}></span>
    );
}
