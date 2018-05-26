import React from 'react'
import './Button.css'

export default function Button ({
  className,
  children,
  style,
  onClick 
}){
  return (
    <div
      onClick={onClick || null}
      className={'button' + (className ? ` ${className}` : '')}
      style={style ? style : null}
    >
      {children}
    </div>
  )
}
