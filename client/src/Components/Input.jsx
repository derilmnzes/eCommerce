import React from 'react'

const Input = ({onChange,placeholder,name,type,required,disabled,value}) => {
  return (
    <input 
    name={name}
    disabled={disabled}
    type={type}
    className='input'
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    value={value}
  />
  )
}

export default Input;