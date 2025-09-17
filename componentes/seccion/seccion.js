export function seccion1() {
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion1";

    let titulo = document.createElement('h1');
    titulo.className = "titu1";
    titulo.innerText = "Q 0.00";

    seccion1.appendChild(titulo);

    return seccion1;
}
