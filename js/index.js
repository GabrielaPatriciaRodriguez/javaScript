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

let nombreUsuario = prompt("Cual es tu nombre?").toUpperCase();
console.log(nombreUsuario);
let apellidoUsuario = prompt("Cual es tu apellido?").toUpperCase();
console.log(apellidoUsuario);

if (nombreUsuario == "GABRIELA" && apellidoUsuario == "RODRIGUEZ") {
    alert("Hola " + nombreUsuario + " " + apellidoUsuario + " Bienvenida");

    let contrasena = prompt(nombreUsuario + " ingresa tu contrasena").toUpperCase();

    if (contrasena == "GABYPAT") {
        alert("Su contrasena es correcta");
    } else if ((contrasena === "") || (contrasena === null)) {
        alert("ingrese contraseña correcta");
    } else {
        alert("contraseña incorrecta");
    }
} else if ((nombreUsuario === "") || (nombreUsuario === null) || (apellidoUsuario === "") || (apellidoUsuario === null)) {
    alert("Debe ingresar un nombre de usuario valido");
} else {
    alert("Ud. no se encuentra registrado/a");
}



let estadoTiempo = prompt("Como esta el clima hoy? lluvioso - soleado - frio").toUpperCase();

if (estadoTiempo == "LLUVIOSO") {
    alert("Lleva paraguas y piloto");
} else if (estadoTiempo == "SOLEADO") {
    alert("lleva protector solar");
} else if (estadoTiempo == "FRIO") {
    alert("Lleva mucho abrigo");
} else {
    alert("ingresa una opcion valida");
}