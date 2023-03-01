import React from 'react'

const Button = ({children,onClick,type}) => {
  return (
   <button onClick={onClick} type={type} className='button'>
    {children}
   </button>
  )
}

export default Button