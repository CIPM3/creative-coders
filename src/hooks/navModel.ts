const title: string = "CreativeCoders - Home"

interface NavItem {
    title: string,
    url: string,
    isSelected: boolean
}

// navModel.ts
export const navModel = {
    title,
    navItems: [
      { title: 'Inicio', url: '/', isSelected: false },
      { title: 'Servicios', url: '/servicios', isSelected: false },
      { title: 'Paquetes', url: '/paquetes', isSelected: false },
      { title: 'Muestras', url: '/muestras', isSelected: false },
      { title: 'Contacto', url: '/contacto', isSelected: false },
    ],
  
    // Actualiza solo un ítem a isSelected=true y todos los demás a isSelected=false
    updateItem(title: string, isSelected: boolean): void {
      this.navItems = this.navItems.map((item) =>
        item.title === title ? { ...item, isSelected: isSelected } : { ...item, isSelected: false }
      );
    },
  };
  