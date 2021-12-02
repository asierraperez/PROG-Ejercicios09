/**
 * inicializo las posiciones del array de los equipos para qu cada una sea un object
 * @param {Object} equipos 
 * @param {array <string>} nombres 
 * @returns {array<object>}
 */
function iniciar_liga(equipos, nombres) {
    /**
     * array co los datos de cada equipo
     * @type {Array}
     */
    var liga = []
    for (let i = 0; i < nombres.length; i++) {
        liga[i] = new equipos()
        liga[i].nombre = nombres[i]
    }
    return liga
}