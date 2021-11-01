/*funcion de tipom exprecion
let suma = function (a,b) {return  a + b};


//funcion de flecha
const sumarFuncionTipoFlecha = (a,b) => a-b;

resultado = sumarFuncionTipoFlecha(3,5)
console.log(resultado);*/

// argumentos en js
//concepto de parametros
//metyodo me muestyra el contenido de la variable 
let nuevo = function (a,b){
    console.log(arguments[0]);
    arguments[1]
    return a+b
}
resultado = nuevo(4,5);
console.log(resultado)
// sumar argumentos con un elemento no definidio
let nevoeje = function (a,b){
    console.log(arguments[0]);
    arguments[1];
    arguments[2];
    return a + b + arguments[2];
}
respuesta= nevoeje(6,8,9)
console.log(respuesta);

