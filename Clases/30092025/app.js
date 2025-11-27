// Guarda las tareas en un arreglo (cada tarea tiene nombre y estado completado)
let tareas = [];

// Muestra un prompt con las opciones disponibles y devuelve la opción elegida (número)
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.-Ver todas las tareas.
        3.-Marcar tarea como completada.
        4.- Eliminar tarea
        4.-Salir.
        "Elige una opcion"
        `));
}

// Pide al usuario el nombre de la tarea y la añade al arreglo con estado pendiente
function agregarTarea(){
    let nombre = prompt("Introduce  el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completado: false 
        };
        tareas.push(tarea);
        alert("¡La tarea se agrego de manera exitosa!")
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

// Muestra una lista formateada de todas las tareas (índice, nombre y estado)
function verTareas(){
    if( tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// Pide el número de tarea y marca esa entrada como completada (si el número es válido)
function marcarTareaCompletada( ){
    let numero = parseInt(prompt( "Introduce el numero de la tarea que se desea marcar como completada"));
    if( numero > 0 && numero <= tareas.length ){
        tareas[numero - 1].completado=true;
        alert(`La tarea "${tareas[numero-1].nombre}" ha sido marcada como copletada.`);
    }else{
        alert("Numero de tarea invalido");
    }
}   

// Bucle principal que muestra el menú y llama a las funciones según la opción
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
            let opcion= mostrarMenu();

            switch(opcion){
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
                    alert("Saliendo del programa");
                    continuar = false;
                    break
                default:
                    alert("Opcion no valida. Intenta de nuevo");
            }
    }
    alert("Programa finalizado")
}

// Inicia la aplicación
iniciarPrograma();