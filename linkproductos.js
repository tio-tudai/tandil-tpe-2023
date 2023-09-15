// Script para la funcionalidad de navegación
const productsLink = document.querySelector('a[href="productos.html"]');

productsLink.addEventListener('click', (event) => {
    event.preventDefault();
    // Agregar lógica para navegar a la página de productos aquí
    console.log('Navegando a la página de productos');
});
