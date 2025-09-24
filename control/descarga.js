export function descarga() {
    const div = document.body; // 👈 captura todo el body
    window.html2canvas(div).then(canvas => {
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Lista_compras.png";
        enlace.click();
    });
}
