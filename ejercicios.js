//operaciones aritmeticas
let numeroUno = 7;
let numeroDos = 6;
// operaciones
let suma , resta , multiplicacion , divicion ;
suma = numeroUno + numeroDos;
resta = numeroUno - numeroDos;
multiplicacion = numeroUno * numeroDos;
divicion = numeroUno / numeroDos;

console.log(suma,resta,divicion)
//function basica
function rentDux(){
console.log("hola run")

}
rentDux();
 
//fuction net
function netNex (a,b){
let nuv = (a/b)+ 3
  console.log(nuv)

}
netNex(8,6);

//if
let nub = 0;

if(nub > 2 ){
  let nr = nub * 5;
  console.log(nr);
}
else{console.log("cero")}

//sentencia fivonacci
  function fibonacci(numero){
    let numeros=[0,1]
  for (let i =2; i < numero;i++){

numeros[i] = numeros[i - 2] + numeros[i-1];

  }

console.log(numeros)

  }
fibonacci(8)



//funcion anonima
function newFuction(bom){
  bom()
}
function llamaDa(){
console.log('estamos en la funcion llamada')
}

newFuction(llamaDa);
