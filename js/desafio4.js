//Mi proyecto: Sera una aplicacion que permita cobrar las mesas de un Resto Bar.

/*Necesito ingresar productos y precios*/

function solicitarProductoYPrecio () {
    let producto = prompt("Que producto quiere ingresar?").toUpperCase();
    let precio = prompt("Cual es su precio?");
    return("Ud. ingreso " + producto + " Y su precio es " + precio);
};

/* Voy a solicitar 3 veces por ahora */
console.log(solicitarProductoYPrecio());
console.log(solicitarProductoYPrecio());
console.log(solicitarProductoYPrecio());

/*Necesito la funcion que permita sumar segun los montos pasados, y que lo acumule en la variable resultado*/

let resultado = 0;

function sumar(precio1, precio2, precio3) {
    resultado = precio1 + precio2 + precio3;
}

sumar(50, 50, 50);

console.log("La mesa dio un total de $ " + resultado);

/* Quiero restar, descontar un 10 porciento por compra en efectivo por ej */



/*Desafio complementario: Pensar un proceso complejo y resolverlo a traves de 3 funciones
1. Ingresar precios de los productos.
2. Sumar los productos.
3. Restar descuento 10%.
4. Mostrar resultado.
 */