/**
 * Se juegan los diferentes partidos con resultados al azar
 * @param {array<object>} liga - datos de los 22 participantes
 * @returns {array<object>}
 */
function comienzo_liga(liga) {
    /**
     * auxiliar para jugar los partidos
     * @type {array<object>}
     */
    var aux_liga = liga


    for (let i = 0; i < liga.length; i++) {
        for (let j = i + 1; j < liga.length; j++) {
            /**
             * primer equipo
             * @type {object}
             */
            var equipo1 = aux_liga[i]
            /**
             * segundo equipo
             * @type {object}
             */
            var equipo2 = aux_liga[j]
            //goles que marca el primer equipo
            equipo1.jugar()
            //goles que marca el segundo
            equipo2.jugar()
            equipo1.goles_favor = equipo1.goles_favor + equipo1.goles
            equipo2.goles_favor = equipo2.goles_favor + equipo2.goles
            equipo1.goles_contra = equipo1.goles_contra + equipo2.goles
            equipo2.goles_contra = equipo2.goles_contra + equipo1.goles

            if (equipo1.goles > equipo2.goles) {
                equipo1.ganador()
                equipo2.perdedor()
            } else if (equipo1.goles < equipo2.goles) {
                equipo2.ganador()
                equipo1.perdedor()
            } else {
                equipo1.empate()
                equipo2.empate()
            }
        }
    }
    return aux_liga
}