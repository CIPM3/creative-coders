import React from 'react'

const formTextarea = ({ title, placeholder, name, value, onChange, onBlur,onError }) => {
  return (
    <textarea 
    className={`w-full h-[35%] transition-colors placeholder:text-creative_secondary placeholder:text-lg placeholder:font-light resize-none border px-4 py-4 ${onError ? "border-creative_orange" : "border-creative_secondary"}  rounded-lg`} 
    placeholder={placeholder} 
    name={name} 
    id={title} 
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    />
  )
}

export default formTextarea