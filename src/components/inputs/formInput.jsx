import React from 'react'

const formInput = ({title,placeholder,name,value,onChange,onBlur,onError}) => {

    const inputType = () => {
        var type = "text"

        if(name === "nombre") type = "text"
        if(name === "email") type = "email"
        if(name === "phone") type = "phone"

        return type
    }

    return (
        <input
            placeholder={placeholder}
            type={inputType}
            id={title}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`w-full py-4 border transition-colors px-5 outline-none placeholder:text-creative_secondary placeholder:text-lg placeholder:font-light ${onError ? "border-creative_orange" : "border-creative_secondary"} rounded-lg`} />
    )
}

export default formInput