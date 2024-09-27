import React from 'react'

const primaryButton = ({ title, onClick,type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full py-4 hover:bg-transparent transition-colors hover:text-creative_secondary hover:border-2 border-creative_secondary bg-creative_secondary mb-5 text-white rounded-lg"
        >
            {title}
        </button>
    )
}

export default primaryButton
