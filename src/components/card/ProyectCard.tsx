import React from 'react';
import styles from '@css/modal/modal.module.css'; // Importa el CSS Module

interface CardTypes {
    onClick?: () => void;
    index: number; // Pasamos el índice de la tarjeta para calcular el delay
    img:string
}

const ProyectCard = ({ onClick, index,img }: CardTypes) => {
    const delay = `${index * 0.2}s`; // Cada tarjeta tendrá un delay incremental de 0.2s

    return (
        <div
            onClick={onClick}
            style={{
                animationDelay: delay, // Aplicamos el delay dinámico basado en el índice
            }}
            className={`w-full h-[410px] cursor-pointer bg-white rounded-lg overflow-hidden relative group ${styles.card}`}
        >
            <img
                src={img}
                className="transition-all duration-[2s] hover:object-bottom ease-linear absolute w-full h-full object-top object-cover hover-trigger"
                alt=""
            />
        </div>
    );
}

export default ProyectCard;
