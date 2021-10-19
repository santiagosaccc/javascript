
//suma de argumentos 
let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado)
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma; /// no olvidar el return
}
//paso por valor
//tipos primitivo
let x = 10;
function cambiarValor (a){
    a = 20;
    
}
cambiarValor(x);//pasamos el valor de 10 
console.log(x);


const persona  = {
    nombre : 'Juan',
    apellido : 'perez'
} 