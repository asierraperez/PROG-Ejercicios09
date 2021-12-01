function ordenar_equipos(liga) {
    var aux_ordenar_liga = liga
    var longitud = aux_ordenar_liga.length
    var aux_equipo
    for (let i = 1; i < longitud; i++) {
        for (let j = 0; j < (longitud - i); j++) {
            if (aux_ordenar_liga[j].puntos < aux_ordenar_liga[j + 1].puntos) {
                aux_equipo = aux_ordenar_liga[j]
                aux_ordenar_liga[j] = aux_ordenar_liga[j + 1]
                aux_ordenar_liga[j + 1] = aux_equipo
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
