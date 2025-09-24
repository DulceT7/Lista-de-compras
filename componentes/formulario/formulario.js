import { obtenerLista, guardarLista } from "../../control/miLocalStorage.js";

export function seccionFormulario(sec1) {
    let formulario = document.createElement('form');
    formulario.className = "formulario-compra";

    let inputProducto = document.createElement('input');
    inputProducto.type = "text";
    inputProducto.className = "campo-producto";
    inputProducto.placeholder = "Producto";
    formulario.appendChild(inputProducto);

    let inputPrecio = document.createElement('input');
    inputPrecio.type = "number";
    inputPrecio.className = "campo-precio";
    inputPrecio.placeholder = "Q 00.00";
    formulario.appendChild(inputPrecio);

    let boton = document.createElement('button');
    boton.className = "boton-agregar";
    boton.innerText = "Carrito";
    formulario.appendChild(boton);

    // Referencias a seccion1
    const totalElem = sec1.querySelector('.titu1');
    const lista = sec1.querySelector('.lista-productos');

    function actualizarTotal() {
        let productos = obtenerLista() || [];
        let total = productos.reduce((sum, p) => sum + p.precio, 0);
        totalElem.innerText = `Q ${total.toFixed(2)}`;
    }

    // Inicializar con productos existentes
    (obtenerLista() || []).forEach(prod => {
        let item = document.createElement('li');
        item.className = "item-compra";
        item.innerHTML = `${prod.nombre} - Q ${prod.precio.toFixed(2)} <span class="producto-eliminar">❌</span>`;
        lista.appendChild(item);

        item.querySelector('.producto-eliminar').addEventListener('click', () => {
            item.remove();
            let productos = obtenerLista();
            const i = productos.findIndex(p => p.nombre === prod.nombre && p.precio === prod.precio);
            if (i > -1) {
                productos.splice(i, 1);
                guardarLista(productos);
            }
            actualizarTotal();
        });
    });
    actualizarTotal();

    boton.addEventListener('click', (e) => {
        e.preventDefault();
        let nombre = inputProducto.value.trim();
        let precio = parseFloat(inputPrecio.value);

        if(nombre && !isNaN(precio) && precio > 0) {
            let item = document.createElement('li');
            item.className = "item-compra";
            item.innerHTML = `${nombre} - Q ${precio.toFixed(2)} <span class="producto-eliminar">❌</span>`;
            lista.appendChild(item);

            item.querySelector('.producto-eliminar').addEventListener('click', () => {
                item.remove();
                let productos = obtenerLista();
                const i = productos.findIndex(p => p.nombre === nombre && p.precio === precio);
                if (i > -1) {
                    productos.splice(i, 1);
                    guardarLista(productos);
                }
                actualizarTotal();
            });

            let productos = obtenerLista() || [];
            productos.push({ nombre, precio });
            guardarLista(productos);

            actualizarTotal();
            inputProducto.value = "";
            inputPrecio.value = "";
        } else {
            alert("Debes ingresar un producto válido con precio.");
        }
    });

    return formulario;
}
