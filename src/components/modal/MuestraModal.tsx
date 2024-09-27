import React, { useState } from 'react'
import ButtonModal from "@assets/svg/modal_button_svg";
import styles from "@css/modal/modal.module.css"

interface ModalTypes {
    onClose: () => void,
    onPass: () => void,
    onBack: () => void,
    paquete: Array<string>,
    paquetes: string[][],
    index: number
}

const MuestraModal = ({ onClose, paquete, paquetes, index, onBack, onPass }: ModalTypes) => {
    const [mainFoto, setmainFoto] = useState(0)

    const atras = () => {
        if (mainFoto > 0) {
            setmainFoto(mainFoto - 1);
        } else {
            // Si está en la primera imagen, ir a la última
            setmainFoto(paquete.length - 1);
        }
    }

    const adelante = () => {
        if (mainFoto < paquete.length - 1) {
            setmainFoto(mainFoto + 1);
        } else {
            // Si está en la última imagen, ir a la primera
            setmainFoto(0);
        }
    }
    return (
        <div className="fixed w-full h-full inset-0 z-[100] px-[7dvw] bg-creative_primary/90">
            {/* CONTROLS */}
            <div className='w-full flex justify-between flex-col-reverse xl:flex-row py-5 mt-[5%]'>
                <div className={`flex ${paquetes.length >= index && index === 0 ? "justify-end w-full" : "justify-between"}  w-full xl:w-[70%]`}>
                    {
                        index !== 0 && paquetes.length > 1 && (
                            <h3 onClick={onBack} className='text-white cursor-pointer font-light  text-xl md:text-2xl'>Muestra anterior</h3>
                        )
                    }
                    {
                        paquetes.length >= index && (
                            <h3 onClick={onPass} className='text-white cursor-pointer font-light  text-xl md:text-2xl'>Siguiente muestra</h3>
                        )
                    }
                </div>
                <div className='w-full mb-3 xl:mb-0 xl:w-[30%] flex justify-end'>
                    <h3 onClick={() => onClose()} className='text-creative_orange cursor-pointer font-light text-2xl'>Salir x</h3>
                </div>
            </div>

            {/* PROYECTS IMAGE CONTENT */}
            <div className='w-full h-[79%] flex flex-col xl:flex-row gap-5'>
                <div className='lg:w-full xl:w-[70%] max-h-[50%] md:max-h-[60%] lg:max-h-[80%] xl:max-h-full h-full bg-white rounded-md'>
                    <img src={paquete[mainFoto]} className={`object-cover cursor-pointer rounded-md w-full h-full ${styles.card}`} alt="" />
                </div>

                <div className='w-full xl:w-[30%] h-full'>
                    <div className='xl:w-full w-[200dvw] h-[70%] xl:grid gap-5 flex justify-start xl:overflow-hidden  xl:grid-cols-2 xl:grid-rows-2'>

                        {
                            paquete.map((img, index) => (
                                <ModalProyectCard index={index} onClick={() => setmainFoto(index)} key={index} url={img} />
                            ))
                        }
                    </div>

                    <div className='flex justify-around mt-5'>
                        {/* LEFT */}
                        <ButtonModal
                            onClick={atras}
                            className={"fill-white size-14 cursor-pointer"}
                        />

                        {/* ICONS */}
                        <div className='flex items-center gap-3'>
                            {
                                paquete.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setmainFoto(index)}
                                        className={`size-5 cursor-pointer rounded-full border-[1px] ${index === mainFoto ? "bg-white" : ""} border-white`}
                                    ></div>
                                ))
                            }
                        </div>

                        {/* RIGHT */}
                        <ButtonModal
                            onClick={adelante}
                            className={"fill-white size-14 cursor-pointer rotate-180"}
                        />


                    </div>
                </div>

            </div>
        </div>
    )
}

interface CardProp {
    url: string,
    onClick: () => void,
    index:number
}

const ModalProyectCard = ({ url, onClick,index }: CardProp) => {
    const delay = `${index * 0.2}s`;
    return (
        <div
            onClick={onClick}
            style={{
                animationDelay: delay, // Aplicamos el delay dinámico basado en el índice
            }}
            className={`xl:w-full w-[200px] h-full cursor-pointer bg-creative_secondary rounded-lg overflow-hidden relative group ${styles.card}`}
        >
            <img
                src={url}
                className="transition-all duration-[5s] bg-center ease-linear absolute w-full h-full top-0 object-contain hover-trigger"
                alt=""
            />
        </div>
    )
}

export default MuestraModal
