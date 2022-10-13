"use strict";

document.addEventListener("DOMContentLoaded", mangekyouFansub);

function mangekyouFansub() {

    //---------Menú desplegable--------

    let btnmenu = document.getElementById("botonmenu");
    btnmenu.addEventListener("click", desplegarMenu);

    function desplegarMenu() {
        let menu = document.getElementById("navegador");
        menu.classList.toggle("desplegar");
        
    }

    

}