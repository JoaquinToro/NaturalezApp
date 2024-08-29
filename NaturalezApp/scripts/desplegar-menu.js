const menuBurger = document.getElementById("menu-burger");
const svgMenu = document.getElementById("svgMenuBurger");

menuBurger.addEventListener("click",desplegarMenu);

function desplegarMenu(){
    if(svgMenu.classList.contains("rotated")){
        svgMenu.classList.remove("rotated");
    }else{
        svgMenu.classList.add("rotated");
    }
}