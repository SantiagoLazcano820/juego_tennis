class Tennis {
  constructor() {
    this.puntosJugador1 = 0;
  }

  jugador1Anota() {
    this.puntosJugador1 = 15;
  }

  obtenerScore() {
    if (this.puntosJugador1 === 15) {
      return "15 - Love";
    }
    return "Love - Love";
  }
}

export default Tennis;