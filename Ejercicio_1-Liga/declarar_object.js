/**
 * declaro el objeto con los datos agrupados 
 * @returns {object}
 */
function declaro_object() {
    /**
     * objeto que contiene las variables comunes
     * @type {object}
     */
    var equipo = function () {
        this.nombre = ""
        this.puntos = 0
        this.goles = 0
        this.partidos_jugados = 0
        this.partidos_ganados = 0
        this.partidos_perdidos = 0
        this.partidos_empatados = 0
        this.goles_favor = 0
        this.goles_contra = 0
        this.ganador = function ganar() {
            this.puntos = this.puntos + 3
            this.partidos_ganados++
        }
        this.empate = function empatar() {
            this.puntos = this.puntos + 1
            this.partidos_empatados++
        }
        this.perdedor = function perder() {
            this.partidos_perdidos++
        }
        this.jugar = function jugar() {
            this.goles = Math.floor(Math.random() * (11 - 0) + 0)
            this.partidos_jugados++
        }

    }


    return equipo
}