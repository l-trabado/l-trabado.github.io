//function.js

function ocultarSeccion(elementId, disparador){
    alternarDisparador(disparador);
    var ele = document.getElementById(elementId);
    if(ele.style.display == "none") {
            ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
}

function alternarDisparador(disparador){
    disparador.classList.toggle("fa-angle-down");
}
