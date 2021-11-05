// Desafio Clase 1

// let usuario= prompt("ingrese su nombre");
// let edad= parseInt(prompt("ingrese su edad"));
// console.log(usuario);
// console.log(edad);
// console.log("Hola " + usuario);
// console.log("Hola " + usuario + " en 5 años tendras " + (edad + 5) + " años");

// let nombre= "Gabriela Patricia";
// let apellido= "Rodriguez";
// console.log("yo soy " + nombre + " " + apellido);

// let numero1= 15;
// let numero2= 16;
// console.log(numero1 + numero2);
// console.log(numero2 - numero1);


//Desafio Clase 2

// let nombreUsuario = prompt("Cual es tu nombre?").toUpperCase();
// console.log(nombreUsuario);
// let apellidoUsuario = prompt("Cual es tu apellido?").toUpperCase();
// console.log(apellidoUsuario);

// if (nombreUsuario == "GABRIELA" && apellidoUsuario == "RODRIGUEZ") {
//     alert("Hola " + nombreUsuario + " " + apellidoUsuario + " Bienvenida");

//     let contrasena = prompt(nombreUsuario + " ingresa tu contrasena").toUpperCase();

//     if (contrasena == "GABYPAT") {
//         alert("Su contrasena es correcta");
//     } else if ((contrasena === "") || (contrasena === null)) {
//         alert("ingrese contraseña correcta");
//     } else {
//         alert("contraseña incorrecta");
//     }
// } else if ((nombreUsuario === "") || (nombreUsuario === null) || (apellidoUsuario === "") || (apellidoUsuario === null)) {
//     alert("Debe ingresar un nombre de usuario valido");
// } else {
//     alert("Ud. no se encuentra registrado/a");
// }



// let estadoTiempo = prompt("Como esta el clima hoy? lluvioso - soleado - frio").toUpperCase();

// if (estadoTiempo == "LLUVIOSO") {
//     alert("Lleva paraguas y piloto");
// } else if (estadoTiempo == "SOLEADO") {
//     alert("lleva protector solar");
// } else if (estadoTiempo == "FRIO") {
//     alert("Lleva mucho abrigo");
// } else {
//     alert("ingresa una opcion valida");
// }



// Desafio Clase 3

//Algoritmo para calcular la tabla de multiplicar, pidiendo al usuario que ingrese por que numero
//quiere multiplicar, mostrar por alert y tambien por consola

let ingresarNumero = parseInt(prompt("por que numero quiere multiplicar? Hasta 3"));

  for (let i = 0; i <= 3; i++) {
     let resultado = ingresarNumero * i;
     alert(ingresarNumero + " x " + i + " = " + resultado);
     console.log(ingresarNumero + " x " + i + " = " + resultado);
  }

//Asignar hasta 5 turnos con ciclo for

 for (let i = 1; i <= 5; i++ ) {

     let ingresaNombre = prompt("ingresa tu nombre y te daremos un turno");

     console.log("turno Nº " + i + " nombre " + ingresaNombre);
 }

//Asignar 5 turnos con ciclo while

 let i = 1;
 while (i <= 5) {
     let ingresaNombre = prompt("ingresa tu nombre y te daremos un turno");
     console.log("turno Nº " + i + " nombre " + ingresaNombre);
     i++;
 }

//En un restaurante para que el cliente ingrese preferencia, y le damos la opcion que tiene

let comida = prompt("elija carne roja, vegetales o pastas y le diremos que opciones tenemos");

switch (comida) {
    case "carne roja":
        console.log("ud. eligio " + comida + " tenemos milanesas con pure");
        break;

    case "vegetales":
        console.log("ud. eligio " + comida + " tenemos tarta de espinaca");
        break;

    case "pastas":
        console.log("ud. eligio " + comida + " tenemos ravioles");
        break;

    default:
        console.log("No tenemos esa opcion");
        break;
}

// While con Switch

let comida = prompt("elija carne roja, vegetales o pastas y le diremos que opciones tenemos");

while (comida != "") {
    switch (comida.toUpperCase()) {
        case "CARNE ROJA":
            alert("ud. eligio " + comida + " tenemos milanesas con pure");
            break;
    
        case "VEGETALES":
            alert("ud. eligio " + comida + " tenemos tarta de espinaca");
            break;
    
        case "PASTAS":
            alert("ud. eligio " + comida + " tenemos ravioles");
            break;
    
        default:
            alert("No tenemos esa opcion");
            break;
    }
    comida = prompt("elija carne roja, vegetales o pastas y le diremos que opciones tenemos");
}