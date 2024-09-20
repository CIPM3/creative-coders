import React from 'react';

const PackageSelector = ({ activePackage, setActivePackage }) => {
  // Definimos el filtro CSS para cambiar el color a naranja

  return (
    <div className="w-full flex flex-col items-center pt-[3%]">
      <div className="flex gap-x-10">
        <button
          className={`text-3xl transition-all font-light relative ${
            activePackage === 'web' ? 'text-creative_orange' : 'text-white'
          }`}
          onClick={() => setActivePackage('web')}
        >
          Páginas web
          {activePackage === 'web' && (
            <img 
              src="./assets/svg/selected_orange.svg" 
              alt=""
              className="absolute  -bottom-6 size-5 left-1/2 transform rotate-180 -translate-x-1/2"
            />
          )}
        </button>
        <button
          className={`text-3xl transition-all font-light relative ${
            activePackage === 'app' ? 'text-creative_orange' : 'text-white'
          }`}
          onClick={() => setActivePackage('app')}
        >
          Aplicaciones
          {activePackage === 'app' && (
            <img 
            src="./assets/svg/selected_orange.svg" 
            alt=""
            className="absolute -bottom-6 size-5 left-1/2 transform rotate-180 -translate-x-1/2"
          />
          )}
        </button>
      </div>
    </div>
  );
};

export default PackageSelector;