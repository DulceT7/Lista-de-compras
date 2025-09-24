import { Header } from "./componentes/header/header.js";
import { seccion1 } from "./componentes/seccion/seccion.js"; 
import { seccionFormulario } from "./componentes/formulario/formulario.js";
import { obtenerLista, guardarLista } from "./control/miLocalStorage.js";

function seccion() {
    let seccion = document.createElement('section');
    seccion.className = 'todo';

    const sec1 = seccion1(); 
    seccion.appendChild(Header());
    seccion.appendChild(sec1);

    const formulario = seccionFormulario(sec1); 
    seccion.appendChild(formulario);

    return seccion;
}

// 🔹 Apuntamos al root
const root = document.querySelector('#root');
root.appendChild(seccion());
