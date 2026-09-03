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

  it("deberia mostrar Love - 15 cuando jugador 2 anota 1 vez" , () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 15");
  });

  it("deberia mostrar Love - 30 cuando jugador 2 anota 2 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 30");
  });

  it("deberia mostrar Love - 40 cuando jugador 2 anota 3 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 40");
  });

  it("deberia mostrar Game for Player 2 cuando jugador 2 anota 4 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 2");
  });

  it("deberia mostrar 30 - 15 cuando jugador 1 anota 2 veces y jugador 2 anota 1 vez" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30 - 15");
  });

  it("deberia mostrar Deuce cuando jugador 1 anota 3 veces y jugador 2 anota 3 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Deuce");
  });

  it("deberia mostrar Advantage for Player 1 cuando jugador 1 anota 4 veces y jugador 2 anota 3 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Advantage for Player 1");
  });

  it("deberia mostrar Advantage for Player 2 cuando jugador 1 anota 3 veces y jugador 2 anota 4 veces" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Advantage for Player 2");
  });

  it("deberia mostrar Game for Player 1 cuando los jugadores estan en Deuce y jugador 1 anota 2 veces seguidas" , () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 1");
  });
});
