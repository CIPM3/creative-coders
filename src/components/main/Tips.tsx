import { CircleX, Play } from 'lucide-react';
import React, { useState } from 'react'

const Tips = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const TipsData = [
        {
            title: "consejos para disenar tu app",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fconsejos%20para%20disenar%20tu%20app.mp4?alt=media&token=7feaa4f4-4fe8-4552-bbf3-c969654fa872"
        },
        {
            title: "convenciones familiares",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fconvenciones%20familiares.mp4?alt=media&token=6fc3b06a-9b28-441c-9b81-85fcf4e7c9a0"
        },
        {
            title: "jerarquia visual",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fjerarquia%20visual.mp4?alt=media&token=d9424c02-aaa6-4656-a5c9-93c06cc6306b"
        },
        {
            title: "la simplicidad",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fla%20simplicidad.mp4?alt=media&token=bcab81d8-e885-441f-b579-900e4b7a8b9a"
        },
        {
            title: "retroalimentacion inmediata",
            video: "https://firebasestorage.googleapis.com/v0/b/oratoriacursos-2d1d2.appspot.com/o/creative-coders%2Fretroalimentacion%20inmediata.mp4?alt=media&token=3dbc6217-0faf-4984-9cf1-6ab3a1d97a32"
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
                        <div className="gap-3 min-h-[300px] py-7 flex flex-col items-center cursor-pointer" onClick={() => openModal(tip.video)}>
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
