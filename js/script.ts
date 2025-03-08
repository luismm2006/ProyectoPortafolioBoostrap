document.addEventListener("DOMContentLoaded", () => {
    if (typeof Typed !== "undefined") {
        const typed = new Typed("#typed-text", {
            strings: ["Soy developer"],
            typeSpeed: 100,  // Velocidad de escritura
            backSpeed: 50,   // Velocidad de borrado (no se usará)
            showCursor: false, // Oculta el cursor intermitente
            loop: false      // No se repite
        });
    } else {
        console.error("Typed.js no está cargado correctamente.");
    }
});
