const bodyContent = document.querySelector(".body-content");
const sidenav = document.getElementById("sidenav");
const menuButton = document.getElementById("menu-burger");

// Función que despliega u oculta el menú lateral
function toggleMenu() {
    if (sidenav.classList.contains("show")) {
        sidenav.classList.remove("show");
        menuButton.classList.remove("rotated");
    } else {
        sidenav.classList.add("show");
        menuButton.classList.add("rotated");
    }
}

// Se añade el click en el SVG de menu burger del header para que despliegue el menú
menuButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleMenu();
});

// Se añade el click en el cuerpo del documento para que cierre el menú si se presiona fuera de él
bodyContent.addEventListener("click", function(event) {
    if (sidenav.classList.contains("show") && !sidenav.contains(event.target) && !menuButton.contains(event.target)) {
        toggleMenu();
    }
});
