import React, { useEffect, useState } from 'react';
import { navModel } from "@hooks/navModel"; // Asegúrate de que este módulo exporte correctamente navModel

const NavItem = ({ title, url,path }) => {
    const { navItems } = navModel
    const item = navItems.find(item => item.title === title);
    const isSelected = item.isSelected;

    const handleSelect = () => {
        navModel.updateItem(title, !isSelected);
        window.location.hash = url; // Opcional, dependiendo de si quieres cambiar el hash en la URL
    };


    return (
        <a
            href={`${url}`}
            className={`text-white font-bold relative nav-item ${isSelected ? "selected" : ""}`}
            onClick={handleSelect}
        >
            {title}
            {path === url && (
                <img
                    className="absolute -bottom-3 left-1/3 size-3"
                    src="./assets/svg/selected_weird.svg"
                    alt="Selected"
                />
            )}
        </a>
    );
};

export default NavItem;
