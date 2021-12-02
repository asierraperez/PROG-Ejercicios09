/**
 * ordeno los equipos por puntuación
 * @param {array<Object>} liga 
 * @returns {array}
 */
function ordenar_equipos(liga) {
    /**
     * auxiliar para ordenar la liga
     * @type {array<object>}
     */
    var aux_ordenar_liga = liga
    /**
     * longitud del array con los equipos
     * @type {number}
     */
    var longitud = aux_ordenar_liga.length
    /**
     * auxiliar, equipos individuales
     * @type {object}
     */
    var aux_equipo

    /*MÉTODO DE LA BURBUJA

        Consiste en ir comparando cada numero del array con el siguiente
    para ir dejando el mas alto en la posicion mas alta o mas baja (en este caso en la mas baja)

        Con el primer 'for' determinamos el numero de veces que hay que recorrer el array

        Con el segundo movemos las posiciones en función de su valor

        Por ejemplo, en la primera vuelta se comparara cada valor con el siguiente hasta que 
    el más alto quede en la posicion 0. En la siguiente se hará lo mismo pero quedará el mas alto en la posición 1
    y asi sucesivamente.
    */

    for (let i = 1; i < longitud; i++) {
        for (let j = 0; j < (longitud - i); j++) {
            //el que mas puntos tenga, quedara en la posición las baja
            if (aux_ordenar_liga[j].puntos < aux_ordenar_liga[j + 1].puntos) {
                aux_equipo = aux_ordenar_liga[j]
                aux_ordenar_liga[j] = aux_ordenar_liga[j + 1]
                aux_ordenar_liga[j + 1] = aux_equipo
                //si estan empatados a puntos, consulto los goles a favor
            } else if (aux_ordenar_liga[j].puntos == aux_ordenar_liga[j + 1].puntos) {
                if (aux_ordenar_liga[j].goles_favor < aux_ordenar_liga[j + 1].goles_favor) {
                    aux_equipo = aux_ordenar_liga[j]
                    aux_ordenar_liga[j] = aux_ordenar_liga[j + 1]
                    aux_ordenar_liga[j + 1] = aux_equipo
                }
            }
        }
    }
    return aux_ordenar_liga
}
