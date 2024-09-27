import React from 'react';
import PrimaryButton from "@components/button/primaryButton";

interface PackageType {
    title: string,
    price: string,
    timeline: string,
    specs: string[]
}

interface Props {
    paquete: PackageType,
    index: number,
    className:string
}

const getColorText = (index: number) => {
    if (index === 0) return "text-white";
    if (index === 1) return "text-creative_weird";
    if (index === 2) return "text-creative_orange";
    if (index === 3) return "text-creative_gray";
    return "";
}

const getColorBackground = (index: number) => {
    if (index === 0) return "bg-white";
    if (index === 1) return "bg-creative_weird";
    if (index === 2) return "bg-creative_orange";
    if (index === 3) return "bg-creative_gray";
    return "";
}

const PaqueteCard: React.FC<Props> = ({ paquete, index, className }) => {
    const textColor = getColorText(index);
    const bgColor = getColorBackground(index);

    return (
        <div className={`w-full package-card opacity-0 -translate-x-[50px] ${className} h-fit`}>
            <h2
                className={`text-7xl ${textColor} text-center opacity-50 font-bold`}
                style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "1px",
                }}
            >
                Paquete
            </h2>
            <div className={`w-full h-full mt-3 ${bgColor} rounded-md py-4 px-6`}>
                <h3 className="text-center font-bold text-creative_secondary text-3xl">
                    {paquete.title}
                </h3>
                <h5 className="text-5xl font-bold text-creative_secondary text-center">
                    ${paquete.price}
                </h5>
                <p className="text-creative_secondary font-bold text-lg text-center">
                    {paquete.timeline}
                </p>
                <ul className="w-full my-5">
                    {paquete.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="text-creative_secondary text-md font-light">
                            {spec}
                        </li>
                    ))}
                </ul>
                <PrimaryButton type="button" title="contratar" onClick={() => {}} />
            </div>
        </div>
    );
};

export default PaqueteCard;