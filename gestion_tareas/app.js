let tareas = [];

function mostrarOpciones() {
    return parseInt(prompt(`
        Opciones Disponibles
        1.= Agregar Tarea
        2.- Ver todas las Tareas
        3.- Marcar mis tareas como completadas
        4.- Salir
        `));
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarOpciones();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
    alert("Programa finalizado");
}

function agregarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    } else {
        alert("El nombre de la tarea no puede estar vacia");
    }
}

function verTareas() {
    console.clear();
    for (let tarea of tareas) {
        let msj = tarea.nombre + ", estado: " + ((tarea.completada) ? "Completada" : "Incompleta");
        console.log(msj);
    }
}

function marcarTareaCompletada() {
    let index = 0;
    let msj = "";
    if (tareas.length != 0) {
        tareas.forEach((tarea, index) => msj += (index + 1) + ": " + tarea.nombre +
            " -> " + ((tarea.completada) ? "Completada" : "Incompleta") + "\n");
        index = parseInt(prompt("Ingrese el numero de tarea para completarla\n" + msj));
        if (index <= 0 || index >= tareas.length) {
            alert("Tarea inexistente");
        } else {
            tareas[index - 1].completada = true;
            alert("Tarea finalizada");
        }
    } else {
        alert("No tiene tareas registradas");
    }
}
