
//Menu de navegación
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
        console.log ("Es falso pero con display pasa a ser verdadero")
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
        console.log ("La variable es verdadera por lo que el menú se oculta")
    }
}
//para que el menú se oculte una vez que el usuario ya seleccionó una opción de navegación
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    console.log("La variable es:"+x)
    links [x].onclick = function(){
        menu.style.display = "none";
        menu_visible= false;
    }
}


