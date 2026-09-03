class Tennis {
  constructor() {
    this.puntosJugador1 = 0;
    this.puntosJugador2 = "Love"; 
  }

  jugador1Anota() {
    this.puntosJugador1 += 1; 
  }

  jugador2Anota() {
    this.puntosJugador2 = "15"; 
  }

  obtenerScore() {
    if (this.puntosJugador1 === 4) {
      return "Game for Player 1";
    }

    const tarjetaPuntos = {
      0: "Love",
      1: "15",
      2: "30",
      3: "40"
    };

    let scoreJ1 = tarjetaPuntos[this.puntosJugador1];
    return `${scoreJ1} - ${this.puntosJugador2}`;
  }
}

export default Tennis;