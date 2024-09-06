const sidenav = document.querySelector(".sidenav");
const bodyContent = document.querySelector(".body-content");
const menuButton = document.getElementById("menu-burger");

//Función que despliega el menú lateral 
function toggleMenu(){
    sidenav.classList.toggle("show");
    bodyContent.classList.toggle("shifted");
    menuButton.classList.toggle("shifted");
    if (!menuButton.classList.contains("rotated")){
        menuButton.classList.add("rotated");
    }else{
        menuButton.classList.remove("rotated");
    }
}

//Se añade el click en el SVG de menu burger del header para que despliege el menú
document.getElementById("menu-burger").addEventListener("click", function(event){
    event.stopPropagation();
    toggleMenu();
});

//Se añade el click en el cuerpo del documento para que cierre el menú si se presiona en el
//cuando el menú está desplegado
document.addEventListener("click", function(event){
    if(!sidenav.contains(event.target) && sidenav.classList.contains("show")){
        toggleMenu();
    }
});
