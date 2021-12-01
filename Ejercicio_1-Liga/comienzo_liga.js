function comienzo_liga(liga) {
    var aux_liga = liga
    var equipo1
    var equipo2
    for (let i = 0; i < liga.length; i++) {
        for (let j = i + 1; j < liga.length; j++) {
            equipo1 = aux_liga[i]
            equipo2 = aux_liga[j]
            equipo1.jugar()
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