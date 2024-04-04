import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const redis = Redis.fromEnv()

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    if (req.headers.get('Content-Type') !== 'application/json') {
      return new NextResponse('Content type must be json', { status: 400 })
    }
    const data = await req.json()
    if (!data.slug) return new NextResponse('No Slug', { status: 400 })

    const hash = await generateHash(req.ip ?? '127.0.0.1')
    const dedupKey = `deduplicate:${hash}:${data.slug}`
    const isNew = await redis.set(dedupKey, true, { nx: true, ex: 60 * 60 })

    if (!isNew) {
      return new NextResponse('Duplicate request', { status: 202 })
    }
    await redis.incr(`counter:${data.slug}`)
    return new NextResponse('Request processed', { status: 202 })
  } catch (error) {
    console.error('Error processing request:', error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}

async function generateHash(input) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
