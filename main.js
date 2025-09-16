import { crearHeader } from "./componentes/header/header.js";

function seccion() {
    let section = document.createElement('section');
    section.className = "seccion";

    section.appendChild(crearHeader());

    return section;
}

document.body.appendChild(seccion());
