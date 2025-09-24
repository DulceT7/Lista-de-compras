import { guardarLista, obtenerLista} from "../../control/miLocalStorage.js"

export function seccionFormulario() {
    
    let formulario = document.createElement('form');
    formulario.className = "formulario-compra";

    let inputProducto = document.createElement('input');
    inputProducto.className = "campo-producto";
    inputProducto.type = "text";
    inputProducto.placeholder = "Producto";
    formulario.appendChild(inputProducto);

    let inputPrecio = document.createElement('input');
    inputPrecio.className = "campo-precio";
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Q 00.00";
    formulario.appendChild(inputPrecio);

    let boton = document.createElement('button');
    boton.className = "boton-agregar";
    boton.innerText = "Carrito";
    formulario.appendChild(boton);

    let lista = document.createElement("ul");
    lista.className = "lista-productos";
    formulario.appendChild(lista);

    boton.addEventListener('click', (e) => {
        e.preventDefault();

        let nombre = inputProducto.value.trim(); 
        let precio = parseFloat(inputPrecio.value);

        if (nombre !== "" && !isNaN(precio) && precio > 0) {    

            // contenedor del producto
            let item = document.createElement('li');
            item.className = "item-compra";

            // nombre y precio
            let texto = document.createElement('span');
            texto.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;

            // botón eliminar
            let eliminar = document.createElement('span');
            eliminar.className = "producto-eliminar";
            eliminar.textContent = "❌";
            eliminar.style.cursor = "pointer";

            eliminar.addEventListener('click', () => {
                item.remove(); // elimina del DOM

                let productos = obtenerLista();
                const i = productos.findIndex(p => p.nombre === nombre && p.precio === precio);
                if (i > -1) {
                    productos.splice(i, 1);
                    guardarLista(productos);
                }
            });

            // agregamos todo al item
            item.appendChild(texto);
            item.appendChild(eliminar);

            lista.appendChild(item);

            // guardamos en localStorage
            let carritoLocalStorage = obtenerLista() || [];
            carritoLocalStorage.push({ nombre, precio });
            guardarLista(carritoLocalStorage);

            inputProducto.value = "";
            inputPrecio.value = "";
        } else {
            alert("Debes ingresar un producto válido con precio.");
        }
    });

    return formulario;
}
