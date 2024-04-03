import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export const revalidate = 0 // disable cache

export default async function Home() {
  const member = await redis.srandmember<string>('nextjs13')

  return (
    <div className="mt-40">
      <main>
        <h1>Welcome {member}</h1>
        <p>You have been randomly chosen by the redis algorithm.</p>
      </main>
    </div>
  )
}
