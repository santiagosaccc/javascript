let x = 10; //literal de tipo promitivo

let persona = {
nombre: 'juan',
apellido: 'Perez',
email:'jperez@mail.com',
edad: 28,
idioma: 'es',

get lang(){
    return this.idioma.toUpperCase();
    //toUpperCase();   nos convierte las minusculas en mallusculas 

}


/*get
nombreCompleto: function (){//pormedio de get recuperamos informacion de nuestro objeto 
    return this.nombre + ' ' + this.apellido;
}*/
}


console.log(persona.lang)

/*console.log(persona['apellido']);//--> otra forma de acceder a nuestro prollecto

//FOR IN 
for(nombreProiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombreProiedad]);
}
console.log()


//llamamos una funcion en los objetos
//console.log(persona.nombreCompleto())
//leer los objetos
/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona); 
*/
/*
//crear un objeto nuevo no es tan!!!
let persona2 = new Object();
persona2.nombre = 'Carlos';
// estamos asignado las propiedades
persona2.direccion = 'saturno 15';

persona2.tel = '23222332';

console.log(persona2.tel)
*/

// validaciones en javascript 
