'use client'
import { useEffect, useState } from 'react'
import { RequestView } from 'app/blog/[...slug]/request-view'
import { slug } from 'github-slugger'

export const revalidate = 0 // disable cache

export default function Home() {
  const [views, setViews] = useState(null)

  useEffect(() => {
    fetch(`/api/page-visit?slug=${encodeURIComponent("test")}`)
      .then((response) => response.json())
      .then((data) => setViews(data.viewCnt.toString()))
      .catch((error) => console.error(error))
  })
  return (
    <div className="mt-40">
      <main>
        <RequestView slug='test' />
        <h1>WE HAVE {views} views !!!!!</h1>
      </main>
    </div>
  )
}
