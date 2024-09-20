import React from 'react'

const formTextarea = ({title,placeholder}) => {
  return (
    <textarea className="w-full h-[35%] placeholder:text-creative_secondary placeholder:text-lg placeholder:font-light resize-none border px-4 py-4 border-creative_secondary rounded-lg" placeholder={placeholder} name={title} id={title}/>
  )
}

export default formTextarea