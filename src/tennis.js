class Tennis {
  constructor() {
    this.puntosJugador1 = 0;
  }

  jugador1Anota() {
    this.puntosJugador1 += 1; 
  }

  obtenerScore() {
    const tarjetaPuntos = {
      0: "Love",
      1: "15",
      2: "30"
    };

    let scoreJ1 = tarjetaPuntos[this.puntosJugador1];
    return `${scoreJ1} - Love`;
  }
}

export default Tennis;