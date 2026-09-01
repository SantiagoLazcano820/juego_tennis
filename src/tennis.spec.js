//import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("deberia mostrar Love - Love al nicio del partido" , () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });
});

class Tennis{
    constructor() {

    }
    obtenerScore() {
        return "Love - Love"
    }
}
