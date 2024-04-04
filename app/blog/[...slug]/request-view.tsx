'use client'

import { useEffect } from 'react'

export const RequestView = ({ slug }: { slug: string }): JSX.Element => {
  useEffect(() => {
    fetch('/api/increment-view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    })
  }, [slug])

  return <div />
}
