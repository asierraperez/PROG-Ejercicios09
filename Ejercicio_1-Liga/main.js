function main() {
    /**
     * objeto con los datos de cada equipo
     * @type  {object}
     */
    var equipo = declaro_object()
    /**
     * array con los nombres de los equipos
     * @type {Array<string>}
     */
    var nombres = asigno_nombres()
    /**
     * Equipos participantes con sus estadísticas
     * @type {Array<Object>}
     */
    var liga = iniciar_liga(equipo, nombres)
    liga = comienzo_liga(liga)
    liga = ordenar_equipos(liga)
    mostrar_html(liga)
    console.table(liga)
}
main()