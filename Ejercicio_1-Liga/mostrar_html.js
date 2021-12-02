/**
 * Muestro la clasificación en el HTML
 * @param {array<object>} clasificacion 
 */
function mostrar_html(clasificacion) {
    //recorro las posiciones, cada i es una fila del HTML
    for (let i = 0; i < clasificacion.length; i++) {
        document.getElementById("puesto" + (i + 1)).innerHTML = i + 1
        document.getElementById("nombre" + (i + 1)).innerHTML = clasificacion[i].nombre
        document.getElementById("puntos" + (i + 1)).innerHTML = clasificacion[i].puntos
        document.getElementById("p_jugados" + (i + 1)).innerHTML = clasificacion[i].partidos_jugados
        document.getElementById("p_ganados" + (i + 1)).innerHTML = clasificacion[i].partidos_ganados
        document.getElementById("p_perdidos" + (i + 1)).innerHTML = clasificacion[i].partidos_perdidos
        document.getElementById("p_empatados" + (i + 1)).innerHTML = clasificacion[i].partidos_empatados
        document.getElementById("goles_favor" + (i + 1)).innerHTML = clasificacion[i].goles_favor
        document.getElementById("goles_contra" + (i + 1)).innerHTML = clasificacion[i].goles_contra
    }

}