function myFunction() {
    document.getElementById("demo").innerHTML = "$ 7.50 USD";
    document.getElementById("ecrito_elemnto").innerHTML = "Descuento aplicado";
}

//dom
//querySelector solo regresa un elemento
let porTafolio = document.querySelector(".portafolio");

//mas de u elemento y guradarlo en una lista de
//metodo querySelectorAll nos regresa todos los elementos con el criterio de busqueda 
let tabla = document.querySelectorAll(".imagenes")
console.log(tabla)