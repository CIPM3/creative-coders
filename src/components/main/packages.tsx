import React, { useState, useEffect } from 'react';
import PackageSelector from '@components/package/packageSelector';
import PaqueteCard from '@components/card/PaqueteCard';
import { packages } from "@data/packages.data";
import { setupPackagesAnimation } from "@lib/animations/main/packages.animation";

const PackagesSection = ({transparent=false}) => {
    const [activePackage, setActivePackage] = useState('web');

    const webPackages = packages.WebPackages;
    const appPackages = packages.AppPackages;

    const currentPackages = activePackage === 'web' ? webPackages : appPackages;

    useEffect(() => {
        const cleanup = setupPackagesAnimation();
        return () => {
            if (cleanup) cleanup();
        };
    }, [activePackage]);

    return (
        <section id='paquetes' 
        className={`w-full packages-section min-h-screen ${transparent ? "bg-transparent" : "bg-creative_secondary"}  px-[6dvw] md:px-[7dvw] pb-16`}>
            <div className="w-full flex justify-center pt-[5%]">
                <h2 className="text-white text-4xl text-center md:text-6xl font-bold">Nuestros paquetes</h2>
            </div>
            
            <PackageSelector 
                activePackage={activePackage} 
                setActivePackage={setActivePackage}
            />
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
                {currentPackages?.map((paquete, index) => (
                    <PaqueteCard key={`${activePackage}-${index}`} paquete={paquete} index={index} className="package-card" />
                ))}
            </div>
        </section>
    );
};

export default PackagesSection;