import { useState } from 'react'
import './button.css';

interface ButtonProps {
  primary?: boolean;
}

export const Button = ({ primary = true, ...props }: ButtonProps) => {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const className = primary ? "primary" : "secondary"

  return (
    <button className={className} onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button >
  )
}
