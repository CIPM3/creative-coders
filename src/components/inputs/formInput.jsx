import React from 'react'

const formInput = ({title,placeholder}) => {
    return (
        <input
            placeholder={placeholder}
            type="text"
            id={title}
            name={title}
            className="w-full py-4 border px-5 outline-none placeholder:text-creative_secondary placeholder:text-lg placeholder:font-light border-creative_secondary rounded-lg" />
    )
}

export default formInput