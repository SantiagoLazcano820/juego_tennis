class Tennis {
  constructor() {
    this.puntosJugador1 = 0;
    this.puntosJugador2 = 0;
  }

  jugador1Anota() {
    this.puntosJugador1 += 1; 
  }

  jugador2Anota() {
    this.puntosJugador2 += 1;
  }

  obtenerScore() {
    if (this.puntosJugador1 === 4) {
      return "Game for Player 1";
    }

    if (this.puntosJugador2 === 4) {
      return "Game for Player 2";
    }

    const tarjetaPuntos = {
      0: "Love",
      1: "15",
      2: "30",
      3: "40"
    };

    let scoreJ1 = tarjetaPuntos[this.puntosJugador1];
    let scoreJ2 = tarjetaPuntos[this.puntosJugador2];

    return `${scoreJ1} - ${scoreJ2}`;
  }
}

export default Tennis;