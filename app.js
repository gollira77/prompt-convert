// creación de la variable de la tasa del cambio que sera constanten siempre 
// y tambien se creo el arreglo donde se guardan las operaciones del cliente
const tasaCambio = 1300;
let historial = [];

// Creación de la funcion que pasas los pesos a dolares 
function convertirDivisa(pesos) {
    return pesos / tasaCambio;
}

