import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia mostrar Love - Love al nicio del partido" , () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });

  it("deberia mostrar 15 - Love cuando jugador 1 anota 1 vez" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15 - Love");
  });

  it("deberia mostrar 30 - Love cuando jugador 1 anota 2 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("30 - Love");
  });

  it("deberia mostrar 40 - Love cuando jugador 1 anota 3 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("40 - Love");
  });

  it("deberia mostrar Game for player 1 cuando jugador 1 anota 4 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 1");
  });
});
