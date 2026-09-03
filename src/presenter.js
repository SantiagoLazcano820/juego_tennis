import Tennis from "./tennis.js";

const tennis = new Tennis();

const btnJugador1 = document.querySelector("#jugador1-btn");
const btnJugador2 = document.querySelector("#jugador2-btn");
const divMarcador = document.querySelector("#marcador-div");

divMarcador.innerHTML = "<p>" + tennis.obtenerScore() + "</p>";

btnJugador1.addEventListener("click", () => {
  tennis.jugador1Anota();
  divMarcador.innerHTML = "<p>" + tennis.obtenerScore() + "</p>";
});

btnJugador2.addEventListener("click", () => {
  tennis.jugador2Anota();
  divMarcador.innerHTML = "<p>" + tennis.obtenerScore() + "</p>";
});