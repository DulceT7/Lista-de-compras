import { descarga } from "../../control/descarga.js";

export function Header() {
    let header = document.createElement('header');
    header.className = "header";

    // texto
    let div1 = document.createElement('div');
    div1.innerText = "Lista de compras";   
    div1.className = "titulo";

    // emoji (botón de descarga)
    let div = document.createElement('div');
    div.innerText = "⬇️";   
    div.className = "circulo";
    div.style.cursor = "pointer";

    div.addEventListener("click", () => {
        descarga("miContenedor"); 
    });

    header.appendChild(div1);
    header.appendChild(div);

    return header;
}
