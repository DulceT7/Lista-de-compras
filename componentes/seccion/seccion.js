export function seccion1() {
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion1";
    seccion1.id = "miContenedor"; 

    // Total
    let titulo = document.createElement('h1');
    titulo.className = "titu1"; // aquí se mostrará el total
    titulo.innerText = "Q 0.00";
    seccion1.appendChild(titulo);

    // Lista de productos dentro de seccion1
    let lista = document.createElement('ul');
    lista.className = "lista-productos";
    seccion1.appendChild(lista);

    return seccion1;
}
