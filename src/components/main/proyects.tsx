import React, { useEffect, useState } from 'react';
import PackageSelector from "@components/package/packageSelector";
import ProyectCard from "@components/card/ProyectCard";

import ModalProyectView from "@components/modal/MuestraModal";


const Proyects = ({ transparent = false }) => {
    const webPackages = [
        [
            'https://picsum.photos/200/300?random=1',
            'https://picsum.photos/200/300?random=2',
            'https://picsum.photos/200/300?random=3',
            'https://picsum.photos/200/300?random=4',
            'https://picsum.photos/200/300?random=5',
        ],
        [
            'https://picsum.photos/200/300?random=1',
            'https://picsum.photos/200/300?random=2',
            'https://picsum.photos/200/300?random=3',
            'https://picsum.photos/200/300?random=4',
            'https://picsum.photos/200/300?random=5',
        ],
        [
            './assets/svg/main_front_image.svg',
            './assets/svg/main_front_image.svg',
            './assets/svg/main_front_image.svg',
            './assets/svg/main_front_image.svg',
            './assets/svg/main_front_image.svg',
        ],
    ] as string[][];

    const appPackages = [] as string[][];

    const [activePackage, setActivePackage] = useState('web');
    const [ModalProyect, setModalProyect] = useState(false);
    const [currentPackage, setcurrentPackage] = useState(0)
    const [currentPackages, setcurrentPackages] = useState(activePackage === 'web' ? webPackages : appPackages)

    useEffect(() => {
        setcurrentPackages(activePackage === 'web' ? webPackages : appPackages)

    }, [activePackage])

    const atras = () => {
        if (currentPackage > 0) {
            setcurrentPackage(currentPackage - 1);
        } else {
            // Si ya estamos en el primer paquete, ir al último
            setcurrentPackage(currentPackages.length - 1);
        }
    }

    const adelante = () => {
        if (currentPackage < currentPackages.length - 1) {
            setcurrentPackage(currentPackage + 1);
        } else {
            // Si ya estamos en el último paquete, ir al primero
            setcurrentPackage(0);
        }
    }


    return (
        <section
            id="paquetes"
            className={`w-full relative packages-section overflow-hidden h-fit  ${transparent ? "bg-transparent" : "bg-creative_secondary"} pb-16`}
        >
            <div className="flex absolute inset-0 justify-between pt-[5%] -z-[1]">
                <img
                    className="opacity-35 w-[40vw]"
                    src="./assets/svg/Proyects_Icon.svg"
                    alt=""
                />
                <img
                    className="opacity-35 w-[40vw] rotate-180"
                    src="./assets/svg/Proyects_Icon.svg"
                    alt=""
                />
            </div>

            <div className=" w-full h-fit pt-[25%] md:pt-[15%] lg:pt-[10%] xl:pt-[7%] px-[6dvw] md:px-[7dvw]">
                <div className="w-full flex justify-center">
                    <h2 className="text-white text-4xl text-center md:text-6xl font-bold">
                        Mira algunos de nuestros proyectos
                    </h2>
                </div>

                <PackageSelector
                    activePackage={activePackage}
                    setActivePackage={setActivePackage}
                />

                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
                    {currentPackages?.map((paquete, index) => (
                        <ProyectCard
                            index={index}
                            key={`${activePackage}-${index}`}
                            onClick={() => {
                                setcurrentPackage(index)
                                setModalProyect(true)
                            }}
                        />
                    ))}
                </div>
            </div>

            {ModalProyect && (
                <ModalProyectView
                    paquetes={currentPackages}
                    index={currentPackage}
                    paquete={currentPackages[currentPackage]}
                    onClose={() => setModalProyect(false)}
                    onBack={atras}
                    onPass={adelante}
                />
            )}

        </section>
    );
};


export default Proyects;
