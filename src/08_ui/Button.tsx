import { useState } from 'react'

export default function Button() {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white'
  }

  return (
    <button onClick={() => setIsToggleOn(!isToggleOn)} style={buttonStyle}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}
