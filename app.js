// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("ingresa un nombre valido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${ganador}</strong></li>`;
}