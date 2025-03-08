document.addEventListener("DOMContentLoaded", () => {
    if (typeof Typed !== "undefined") {
        const typed = new Typed("#typed-text", {
            strings: ["Soy developer"],  // Texto a escribir
            typeSpeed: 100,  // Velocidad de escritura
            showCursor: true,  // Mostrar cursor mientras escribe
            loop: false,  // No repetir animación
            onComplete: (self) => {
                setTimeout(() => {
                    document.querySelector(".typed-cursor")?.classList.add("d-none"); // Oculta el cursor
                }, 500);  // Espera 500ms tras finalizar
            }
        });
    } else {
        console.error("Typed.js no está cargado correctamente.");
    }
});
