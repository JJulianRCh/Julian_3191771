/*
function push(arreglo, dato) {
    arreglo[arreglo.length] = dato;
}

arreglo = [];
push(arreglo, 1);
push(arreglo, 2);
push(arreglo, 3);
push(arreglo, 7);

arreglo.forEach(element => console.log(element));
*/

// Ejercicio 1 y 2
function asteriscos(tVer, tHor) {
    let verticales = "";
    for (let i = 0; i < tVer; i++) {
        verticales += "X\n";
    }
    console.log(verticales);
    let horizontales = ""
    for (let i = 0; i < tHor; i++) {
        horizontales += "X";
    }
    console.log(horizontales);
}

tVer = parseInt(prompt("Ingrese el numero de X verticales"));
tHor = parseInt(prompt("Ingrese el numero de X horizontales"));
asteriscos(tVer, tHor);

// Ejercicio 3
function tablasMulti() {
    for (let i = 1; i <= 10; i++) {
        console.log("La tabla de", i);
        for (let j = 1; j <= 10; j++) {
            console.log("%d X %d = %d", i, j, (i * j));
        }
        console.log("\n");
    }
}
tablasMulti();

// Ejercicio 4
frutas = ["Manzana", "Naranja", "Sandia", "Mango", "Durazno", "Cereza", "Toronja", "Pera", "Fresa", "Uva"];

frutas.forEach((element, index) => {
    console.log("(%d) %s", index, element);
});