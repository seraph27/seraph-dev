'use client'
import { useState } from 'react'
import { Snowfall } from 'react-snowfall'
import CommandPanel from './CommandPanel'

interface SnowfallState {
  snowflakeCount: number
  radius: [number, number]
  wind: [number, number]
  speed: [number, number]
  color: string
}

export function ControlPanelItems() {
  const [snowfall, setSnowfall] = useState<SnowfallState>({
    snowflakeCount: 150,
    radius: [0.5, 1],
    wind: [0.5, 1.5],
    speed: [0.5, 1.5],
    color: '#C9C1E6',
  })

  const toggleSnowfall = () => {
    setSnowfall({
      ...snowfall,
      snowflakeCount: snowfall.snowflakeCount === 0 ? 150 : 0,
    })
    return snowfall.snowflakeCount === 0 ? false : true
  }

  return (
    <div>
      <Snowfall
        snowflakeCount={snowfall.snowflakeCount}
        radius={snowfall.radius}
        wind={snowfall.wind}
        speed={snowfall.speed}
        color={snowfall.color}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 30,
        }}
      />
      <CommandPanel onPressedChange={toggleSnowfall} /> 
    </div>
  )
}
