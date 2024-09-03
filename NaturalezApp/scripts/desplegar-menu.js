const sidenav = document.querySelector(".sidenav");
const bodyContent = document.querySelector(".body-content");
const menuButton = document.getElementById("menu-burger");

document.getElementById("menu-burger").addEventListener("click", function() {
    sidenav.classList.toggle("show");
    bodyContent.classList.toggle("shifted");
    menuButton.classList.toggle("shifted");
    if (!menuButton.classList.contains("rotated")){
        menuButton.classList.add("rotated");
    }else{
        menuButton.classList.remove("rotated");
    }
    
  });