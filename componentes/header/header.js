export function Header() {
    let header = document.createElement('header');
    header.className = "header";

    // texto
    let div1 = document.createElement('div');
    div1.innerText = "Lista de compras";   
    div1.className = "titulo";

    // emoji
    let div = document.createElement('div');
    div.innerText = "⬇️";   
    div.className = "circulo";

    header.appendChild(div1);
    header.appendChild(div);

    return header;
}
