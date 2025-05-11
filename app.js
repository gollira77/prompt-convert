// creación de la variable de la tasa del cambio que sera constanten siempre 
// y tambien se creo el arreglo donde se guardan las operaciones del cliente
// la variable de opcion esta definida para que exista fuera del bucle en caso de ser necesaria
const tasaCambio = 1300;
let historial = [];
let opcion = "";

// Creación de la funcion que pasas los pesos a dolares 
function convertirDivisa(pesos) {
    return pesos / tasaCambio;
}

// La condicion dice que el bucle se repetita mientras la opción elegida no sea el "2"
while (opcion !== "2") {
    // Almacenamos la opcion que el usuario ingreso
    opcion = prompt("Elija una opción:\n1 - Convertir ARS a USD\n2 - Salir");

    // elegi switch porque me parecio mas facil hacerlo asi 
    switch (opcion) {
        case "1":
            //Le pido al usuario que escriba la cantidad en pesos argentinos.
            let montoARS = prompt("Ingrese la cantidad en pesos argentinos (ARS):");
            //Convierto el texto ingresado por el usuario a número decimal para realizar las operaciones
            let monto = parseFloat(montoARS);

            // Para que entre en este condicional debe cumplir 2 condiciones:
            // Que el monto debe este vacio (no se haya ingresado ningun número) y que el monto sea cero o un numero negativo
            if (isNaN(monto) || monto <= 0) {
                alert("Debe ingresar un número válido mayor a cero.");
            } else {
                // Llama a la función convertirDivisa para convertir el monto ingresado en ARS a USD.
                let resultadoUSD = convertirDivisa(monto);
                
                // Redondea el resultado a 2 decimales
                let resultadoFormateado = resultadoUSD.toFixed(2);
                
                // muestro al usuario la conversion de sus pesos a dolar
                alert(monto + " ARS equivalen a " + resultadoFormateado + " USD");

                // Guardar la operación en el historial como un objeto
                let operacion = {
                tipo: "divisa",
                entrada: monto + " ARS",
                salida: resultadoFormateado + " USD",
                fecha: new Date().toLocaleString()
                };

                // Agregamos todas las operaciones d edivisas que haga el usuario
                historial.push(operacion);
            }
        break;

        case "2":
            // Cuando ingresa el 2 saldra del sistema y le dara este mensaje
            // Ademas imprimimos el historial del usuario en consola 
            alert("Gracias por usar el conversor. Mira el historial en la consola.");
            console.log("Historial de conversiones:");
            console.log(historial);
        break;

        default:
            // Si ingresa un numero que no sea 1 o 2 en ese caso le dara este mensaje
            alert("Opción no válida. Intente nuevamente.");
        break;
    }
}