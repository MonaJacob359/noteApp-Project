import React from 'react'

const Input = ({style, Website, type}) => {
  return (
    <div>
      <input className={style} placeholder={Website} required type={type}/>
    </div>
  )
}

export default Input
