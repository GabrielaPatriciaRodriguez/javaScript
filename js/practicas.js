//Practicas de Clase 2

// const alumnosClase1 = 63;
// const alumnosClase2 = prompt("¿Cuantos alumnos hay hoy?");
// const resta = alumnosClase1 - alumnosClase2;
// console.log("hoy hay " + resta + " alumnos menos");


// let nombre = "";

// si se cumple la condicion ejecuta esto
// if(nombre == "Fede"){
//     console.log("Hola Fede");
// }

// Si no se cumple la primer condicion haz esto otro
// if (nombre == "Fede"){
//     console.log("Hola Fede"); 
// } else {
//     nombre = prompt("quien esta ahi?");
//     console.log("Hola " + nombre);
// }

// let edad = 5; 

// if (edad = 5) {
//     console.log("Queres un juguito?")
// } if (edad = 21) {
//     console.log("Queres Cerveza?")
// } else {
//     console.log("Queres agua?")
// }

// AFTER CLASE 2 

//REPASO CLASE 1 

// DISTINTOS TIPOS DE VARIABLES

// var nombre /* Declaracion Variable Scope (Ambito) Global sin asignarle valor */
// console.log(nombre);
// var nombre = "Chris" /* Scope (Ambito) Global (Es Var) */
// console.log(nombre);
// let nombre ; /* Scope (Ambito) Local Solo puedo declararla una vez y luego modificar su valor  */
// nombre = "Javier" 
// console.log(nombre);
// nombre = "Carlos";
// console.log(nombre);

// const nombre = "Claudia"; /*constante no puedo reasignarle valor*/
// console.log(nombre);
// nombre = "Roxana";
// console.log(nombre);

// ALGORITMOS = Conjunto de acciones para realizar distintas operaciones.

// let numero1 = 2;
// let numero2 = 3;
// let resultado = numero1 + numero2;
// console.log(resultado);

// Otra opcion 

// let numero1 = parseInt(prompt("Ingrese primer numero")); /* Si no lo parseo va a tomarlo como string y concatenarlo con el otro dato */
// let numero2 = parseInt(prompt("Ingrese segundo numero")); /* Si no lo parseo va a tomarlo como string y concatenarlo con el otro dato */
// let resultado = numero1 + numero2;
// console.log(resultado);

////////////////////////////////////////////////////////////////////////////


// REPASO CLASE 2

// CONDICIONALES SIMPLE - ESTRUCTURA

// let pronostico = prompt("Esta lloviendo? (Respuesta valida Si o No)").toUpperCase();


// if (pronostico=="SI")  {
//     console.log("No olvides tu equipo de lluvia para salir");

// } else if (pronostico== "NO") {

//     console.log("Ok Disfruta de un dia sin lluvia :)");
// } else {
//     console.log("Respuesta invalida, debes responder Si o NO");
// }

// // CONDICIONALES COMPUESTAS - ESTRUCTURA

// let pronostico = prompt("Esta lloviendo? (Respuesta valida Si o No)").toUpperCase();


// if ((pronostico=="Si") || (pronostico=="SI") || (pronostico=="si")) {
//     console.log("No olvides tu equipo de lluvia para salir");

// } else if ((pronostico=="No") || (pronostico=="NO") || (pronostico=="no")) {

//     console.log("Ok Disfruta de un dia sin lluvia :)");
// }else{
//     console.log("Debes ingresar Si o No como respuesta para poder ayudarte");
// }


// EJEMPLO DE CONDICIONALES Y VARIABLES BOOLEANAS - COMO EVALUA JS V O F

// let ingresePass = parseInt(prompt("Ingrese contraseña numerica"));
// let pass = ingresePass;

// if (pass==1234) {
//     pass=true;
//     console.log("verdadero")

// } else {
//     pass=false;
//     console.log("incorrecto")
// }




// EJEMPLO COMBINACION DE OPERADORES DISTINTAS FORMAS DE AGRUPACION DE OPERACION Y DISTINTOS RESULTADOS.

// let edad = prompt("ingrese su edad");

// if ((edad >= 18) && ((edad < 100) || (edad == "mayor"))) {
//     console.log("Mayor de edad");

// } else {
//     console.log("menor de edad o demasiado longevo");

// }

// if (((edad >= 18) && (edad < 100)) || (edad == "mayor")) {
//     console.log("Mayor de edad");

// } else {
//     console.log("menor de edad o demasiado longevo");

// }




// EJEMPLOS DESAFIO CLASE 2 


// VALIDACION NUMERO 

// let numero = parseInt(prompt("Ingrese un Numero"));

// if (numero >1000) {
// alert("Es mayor a mil");

// } else {
// alert("Es menor a mil");
// }

// VALIDACION TEXTO CONTRASENA = Hola

// let contrasena = prompt("Ingresa contraseña");

// if (contrasena=="Hola") {
// alert("contraseña Correcta")

// } else {

//     alert("contraseña Incorrecta")

// }

// VALIDACION NUMERO ENTRE 10 y 50


// let otroNumero = parseInt(prompt("Ingrese otro Numero"));

// if ((otroNumero >= 10 ) && (otroNumero<=50)) {
//     alert(" CORRECTO El Numero esta entre 10 y 50 ");

//     } else {
//     alert(" INCORRECTO El numero no esta entreEs 10 y 50 ");
//     }



// // EJEMPLO DE PRACTICAS SOBRE TEMATICA DE NUESTRO PROYECTO FINAL

// let producto1 = 1000;
// let producto2 = 2000;
// let producto3 = 3000;

// let producto1y2= producto1 + producto2;
// let producto1y3= producto1 + producto3;
// let producto2y3= producto2 + producto3;
// let productosTotal = producto1 + producto2 + producto3;

// let ingreseProductos = prompt("Por Favor Ingrese: \n A si quiere adquirir el producto 1 \n B si quiere adquirir el producto 2 \n C si quiere adquirir el producto 3 \n D si quiere adquirir los productos 1 y 2 \n E si quiere adquirir los productos 1 y 3 \n F si quierer adquirir los productos 2 y 3 \n G si quiere adquirir todos los productos");

// if ((ingreseProductos == "A") || (ingreseProductos == "a")) {
//     alert("Usted eligio el producto 1" + " Su Total es $" + producto1);
//     console.log("Usted eligio el producto 1" + " Su Total es " + producto1);

// } else if ((ingreseProductos == "B") || (ingreseProductos == "b")) {
//     alert("Usted eligio el producto 2" + " Su Total es $" + producto2);
//     console.log("Usted eligio el producto 2" + " Su Total es $" + producto2);

// } else if ((ingreseProductos == "C") || (ingreseProductos == "c")) {
//     alert("Usted eligio el producto 3" + " Su Total es $" + producto3);
//     console.log("Usted eligio el producto 3" + " Su Total es $" + producto3);

// }else if ((ingreseProductos == "D") || (ingreseProductos == "d")) {
//     alert("Usted eligio los productos 1 y 2" + " Su Total es $" + producto1y2);
//     console.log("Usted eligio los productos 1 y 2" + " Su Total es $" + producto1y2);

// } else if ((ingreseProductos == "E") || (ingreseProductos == "e")) {
//     alert("Usted eligio los productos 1 y 3" + " Su Total es $" + producto1y3);
//     console.log("Usted eligio los productos 1 y 3" + " Su Total es $" + producto1y3);

// }else if ((ingreseProductos == "F") || (ingreseProductos == "f")) {
//     alert("Usted eligio los productos 2 y 3" + " Su Total es $" + producto2y3);
//     console.log("Usted eligio los productos 2 y 3" + " Su Total es $" + producto2y3);

// } else if ((ingreseProductos == "G") || (ingreseProductos == "g")) {

//     alert("Usted eligio todos los productos disponibles " + " Su Total es $" + productosTotal);
//     console.log("Usted eligio todos los productos disponibles " + " Su Total es $" + productosTotal);

// } else {
//     alert("Debe ingresar una de los opciones disponibles, Vuelva a iniciar el pedido");
//     console.log("Debe ingresar una de los opciones disponibles, Vuelva a iniciar el pedido");
// }


// BONUS TRACK EJERCICIO DE INGRESO DE USUARIO Y CONTRASENA Y REGISTRO DE DATOS POR CONSOLA

// let nombreUsuario = prompt("Ingrese nombre de Usuario").toUpperCase();

// if (nombreUsuario == "ADMIN"){

//     let pass = prompt( nombreUsuario + " ingrese su password ").toUpperCase();


//     if (pass == "PEPE"){
//         alert("Bienvenido " + nombreUsuario);
//         console.log("Usuario EN LINEA")
//         console.log(nombreUsuario);

//     }else if ((pass === "") || (pass === null)){
//         alert("No es posible ingresar, debes ingresar una contraseña");


//     }else {
//         alert("contraseña incorrecta");
//     }

// }else if ((nombreUsuario === "") || (nombreUsuario === null)){
//     alert("No es posible ingresar, debes ingresar un nombre de usuario");

// }else {
//     alert("usuario incorrecto");
// }

// FIN AFTER CLASE 2

//Practicando funciones - Clase 4

/*function solicitarProductoYPrecio () {
    let producto = prompt("Que producto quiere ingresar?").toUpperCase();
    let precio = parseInt(prompt("Cual es su precio?"));
    return("Ud. ingreso " + producto + " Y su precio es " + precio);
};

/*Voy a solicitar 3 veces por ahora */
/*console.log(solicitarProductoYPrecio());
console.log(solicitarProductoYPrecio());
console.log(solicitarProductoYPrecio());

/*Necesito la funcion que permita sumar segun los montos pasados, y que lo acumule en la variable resultado*/

/*let resultado = 0;

function sumar(precio1, precio2, precio3) {
    resultado = precio1 + precio2 + precio3;
}

sumar(50, 50, 50);

console.log("La mesa dio un total de $ " + resultado);

/* Quiero restar, descontar un 10 porciento por compra en efectivo por ej */

/*const descuento10 = x => x * 0.10;

console.log(descuento10(500));

let resultado2 = 0;

function resta (precio) {
    resultado2 = precio - descuento10;
}

resta(1000);
*/
