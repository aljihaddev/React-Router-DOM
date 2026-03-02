import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={`px-8 py-4 rounded-3xl bg-btnClr ${className}`}>{btnTxt}</button>
  )
}

export default Button