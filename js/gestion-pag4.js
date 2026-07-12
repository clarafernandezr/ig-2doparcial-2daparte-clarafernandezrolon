let cantidadObras = 0;
let tiempoTransferencia = 0;
let costoAlmacenamiento = 0;
let listaObras = [];

//Tuve problemas al cargar las variables con el getElementById, debido a que los values estaban siendo ingresados como string, me ayude con la IA para resolver el problema y me indicó el truco de multiplicar los valores por 1
function cargarInfo() {
    cantidadObras = document.getElementById('cantidad-obras').value * 1;
    tiempoTransferencia = document.getElementById('tiempo-transferencia').value * 1;
    costoAlmacenamiento = document.getElementById('costo-almacenamiento').value * 1;

    document.getElementById('info-inicial').disabled = true;
    document.getElementById('info-obra').disabled = false;
}

function cargarObra() {
    let nombreObra = document.getElementById('nombre-obra').value;
    let duracionObra = document.getElementById('duracion-obra').value * 1;
    let pesoObra = document.getElementById('peso-obra').value * 1;

    listaObras.push({
        nombre: nombreObra,
        duracion: duracionObra,
        peso: pesoObra
    });

    //Había encarado esta función con un bucle for, pero debido a que las obras se ingresan por cada click del botón, elegí reiniciar los valores por cada obra ingresada
    document.getElementById('nombre-obra').value = "";
    document.getElementById('duracion-obra').value = "";
    document.getElementById('peso-obra').value = "";
    //Acá si ya se termina con la lista, se habilita el siguiente paso y se deshabilita el actual
    if (listaObras.length === cantidadObras) {
        document.getElementById('info-obra').disabled = true;
        document.getElementById('boton-calcular').disabled = false;
    }
}

function calcularResultados() {
    let duracionTotal = 0;
    let MBtotal = 0;

    for (let i = 0; i < listaObras.length; i++) {
        duracionTotal += (listaObras[i].duracion);
        MBtotal += (listaObras[i].peso);
    }

    let obraMayorDuracion = listaObras[0];
    for (let i = 0; i < listaObras.length; i++) {
        if (obraMayorDuracion.duracion < listaObras[i].duracion) {
            obraMayorDuracion = listaObras[i];
        }
    }

    let duracionPromedio = duracionTotal / listaObras.length;
    let tiempoTransferenciaMayor = obraMayorDuracion.peso * tiempoTransferencia;
    let presupuestoAnual = costoAlmacenamiento * 12 * MBtotal;

    document.getElementById('duracion-total').innerHTML = "Duración total de todas las obras: " + duracionTotal + " minutos";
    document.getElementById('promedio-duracion').innerHTML = "Duración promedio de las obras: " + duracionPromedio + " minutos";
    document.getElementById('obra-mayor-duracion').innerHTML = "Obra de mayor duración: " + obraMayorDuracion.nombre + " (" + obraMayorDuracion.duracion + " minutos)";
    document.getElementById('tiempo-transferencia-estimado').innerHTML = "Tiempo estimado de transferencia de la obra de mayor duración: " + tiempoTransferenciaMayor + " ms";
    document.getElementById('presupuesto-anual').innerHTML = "Presupuesto anual necesario para mantener la gestión: $" + presupuestoAnual;
}

function reiniciarSistema() {
    cantidadObras = 0;
    tiempoTransferencia = 0;
    costoAlmacenamiento = 0;
    listaObras = [];

    document.getElementById('info-inicial').disabled = false;
    document.getElementById('info-obra').disabled = true;
    document.getElementById('boton-calcular').disabled = true;

    document.getElementById('duracion-total').innerHTML = "";
    document.getElementById('promedio-duracion').innerHTML = "";
    document.getElementById('obra-mayor-duracion').innerHTML = "";
    document.getElementById('tiempo-transferencia-estimado').innerHTML = "";
    document.getElementById('presupuesto-anual').innerHTML = "";
}