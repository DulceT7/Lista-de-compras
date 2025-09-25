export function descarga() {
    const div = document.body; 
    window.html2canvas(div, {
        ignoreElements: (element) => {
            // ignoramos el header y el formulario
            return element.tagName === "HEADER" || element.tagName === "FORM";
        }
    }).then(canvas => {
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Lista_compras.png";
        enlace.click();
    });
}
