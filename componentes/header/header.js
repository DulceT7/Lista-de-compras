export function crearHeader() {
    let header = document.createElement('header');
    header.className ="header";

    let div = document.createElement('div');
    div.innerText ="⬇️";   
    div.className = "circulo";
   
    header.appendChild(div);

    return header;
}
