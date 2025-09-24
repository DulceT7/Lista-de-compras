import { Header } from "./componentes/header/header.js";
import { seccion1 } from "./componentes/seccion/seccion.js"; 
import { seccionFormulario } from "./componentes/formulario/formulario.js";
import { obtenerLista, guardarLista } from "./control/miLocalStorage.js";

function seccion() {
    let seccion = document.createElement('section');
    seccion.className = 'todo';

    let listaProductos = obtenerLista();

    // Inicializar localStorage si está vacío
    if (listaProductos.length === 0) {
        listaProductos = [];
        guardarLista(listaProductos);
    }

    console.log(listaProductos);

    seccion.appendChild(Header());
    seccion.appendChild(seccion1());
    seccion.appendChild(seccionFormulario());

    return seccion;
}

// 🔹 Aquí apuntamos al root
const root = document.querySelector('#root');
root.appendChild(seccion());
