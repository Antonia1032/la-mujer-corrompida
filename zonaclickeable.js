function abrirPopUpZonaClickeable() {
  document.getElementsById("ventana-emergente1")[0].style.display = "block";
}


// Función para cerrar el pop-up
let botonCerrarVentana = document.getElementById("boton-cerrar");
botonCerrarVentana.onclick = function () {
  // console.log("se cerró el pop up");
  document.getElementsById("ventana-emergente1")[0].style.display = "none";
};
function abrirPopUpZonaClickeable() {
  document.getElementsById("ventana-emergente2")[0].style.display = "block";
}


// Función para cerrar el pop-up
let botonCerrarVentana = document.getElementById("boton-cerrar");
botonCerrarVentana.onclick = function () {
  // console.log("se cerró el pop up");
  document.getElementsById("ventana-emergente2")[0].style.display = "none";
};
