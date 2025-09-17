const CARRITO = 'carrito';

function guardarLista(lista) {
localStorage.setItem(CARRITO, JSON.stringify(lista));
}

function obtenerLista() {
return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

function agregarProductos(nombre, precio) {
    let productos = obtenerLista();
    productos.push({ nombre, precio });
    guardarLista(productos);
}

export { agregarProductos, guardarLista, obtenerLista };
