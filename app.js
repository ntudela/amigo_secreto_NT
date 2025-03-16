// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//l usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

//Fucionalidades:
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let nombres = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar entrada: verificar si el campo está vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar al array de amigos
    nombres.push(nombre);
    
    // Actualizar la lista en la interfaz
    actualizarLista();
    
    // Limpiar el campo de entrada después de agregar el nombre
    input.value = "";
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos en la lista antes de sortear
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }
    
    // Generar un índice aleatorio dentro del rango de nombres disponibles
    const indiceGanador = Math.floor(Math.random() * nombres.length);
    
    // Obtener el nombre del amigo secreto usando el índice aleatorio
    const ganador = nombres[indiceGanador];
    
    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${ganador}`;
    resultado.appendChild(li);
}
