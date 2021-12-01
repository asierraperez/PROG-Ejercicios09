function main() {
    var equipo = declaro_object()
    var nombres = asigno_nombres()
    var liga = iniciar_liga(equipo, nombres)
    liga = comienzo_liga(liga)
    var ordenado = ordenar_equipos(liga)
    mostrar_html(liga)
    console.table(liga)
}
main()