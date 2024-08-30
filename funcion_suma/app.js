// Una funcion que realiza una suma
function suma(a, b) {
    return a + b;
}

let a = parseInt(prompt("Ingrese un valor"));
let b = parseInt(prompt("Ingrese otro valor"));
let resultado = suma(a, b);
console.log("La suma de %d mas %d es igual a %d", a, b, resultado);