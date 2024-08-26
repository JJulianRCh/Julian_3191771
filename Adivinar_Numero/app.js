let rnd = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let entrada;
let vidas = 3;

while(vidas > 0) {
    entrada = parseInt(prompt("Adivina el numero del 1 al 10    vidas: " + vidas));
    if (entrada === rnd) {
        break;
    } else {
        console.clear();
        console.log("Te equivocaste");
        console.log((entrada < rnd) ? "El valor esta encima" : "El valor esta abajo");
        vidas--;
    }
}

console.log("Respuesta:", rnd)
document.write((vidas > 0) ? "Ganaste" : "Perdiste")