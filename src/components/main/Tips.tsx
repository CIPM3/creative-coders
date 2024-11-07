import { CircleX, Play } from 'lucide-react';
import React, { useState } from 'react'

const Tips = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const TipsData = [
        {
            title: "convenciones familiares",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fconvenciones%20familiares.mp4?alt=media&token=a0c1e561-d981-4aa0-a12a-c41f85ad1c3a"
        },
        {
            title: "jerarquia visual",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fjerarquia%20visual.mp4?alt=media&token=fef0c6de-5d1c-4480-8a65-1f15a53fa812"
        },
    ]

    const openModal = (src: string) => {
        setVideoSrc(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setVideoSrc('');
    };

    return (
        <section
            className="w-full h-fit gap-10 overflow-x-hidden grid grid-cols-1 xl:grid-cols-1 pb-16 gap-x-10  bg-creative_secondary
  ">
            <h2 className="text-white text-5xl font-bold px-[7dvw] ">Tips para tu Sitio web o App</h2>

            <div className="w-full h-fit pl-[7dvw] pr-[1dvw] gap-6 overflow-x-auto items-center flex">

                {
                    TipsData.map((tip) => (
                        <div className="gap-3 grid grid-cols-1 cursor-pointer" onClick={() => openModal(tip.video)}>
                            <div className="bg-creative_primary rounded-md w-[300px] h-[200px] aspect-video flex items-center justify-center ">
                                <Play className='text-white size-10' />
                            </div>
                            <h2 className="text-white first-letter:uppercase text-xl font-light">{tip.title}</h2>
                        </div>
                    ))
                }


            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center bg-creative_secondary z-[999] justify-center bg-black bg-opacity-50">
                    <div className="w-full h-full flex items-center justify-center p-4 rounded">
                        <button onClick={closeModal} className="absolute top-7 right-7"><CircleX className='text-white text-xl size-10' /></button>
                        <video autoPlay controls src={videoSrc} className=" aspect-video w-[90%] bg-creative_primary rounded-md h-auto md:w-[80%] md:h-1/2 lg:w-1/2 lg:h-1/2"></video>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Tips
