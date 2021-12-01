function iniciar_liga(equipos, nombres) {
    var liga = []
    for (let i = 0; i < nombres.length; i++) {
        liga[i] = new equipos()
        liga[i].nombre = nombres[i]
    }
    return liga
}