window.onload = Promociones;

function Promociones() {
  let checkboxRemeras = document.getElementById("prendaRemeras");
  let checkboxBuzos = document.getElementById("prendaBuzos");
  let checkboxPantalones = document.getElementById("prendaPantalones");

  let cantRemeras = document.getElementById("cantRemeras");
  let cantBuzos = document.getElementById("cantBuzos");
  let cantPantalones = document.getElementById("cantPantalones");

  cantRemeras.onchange = selectPrendaRemeras;
  cantBuzos.onchange = selectPrendaBuzos;
  cantPantalones.onchange = selectPrendaPantalones;

  checkboxRemeras.onclick = checkboxRemerasClicked;
  checkboxBuzos.onclick = checkboxBuzosClicked;
  checkboxPantalones.onclick = checkboxPantalonesClicked;

  MostrarPrecioTotal();
}

function checkboxRemerasClicked() {
  if (document.getElementById("prendaRemeras").checked == true) {
    document.getElementById("mostrarCantRemeras").style.display = "block";
  } else {
    document.getElementById("mostrarCantRemeras").style.display = "none";
  }
  MostrarPrecioTotal();
}
function checkboxBuzosClicked() {
  if (document.getElementById("prendaBuzos").checked == true) {
    document.getElementById("mostrarCantBuzos").style.display = "block";
  } else {
    document.getElementById("mostrarCantBuzos").style.display = "none";
  }
  MostrarPrecioTotal();
}
function checkboxPantalonesClicked() {
  if (document.getElementById("prendaPantalones").checked == true) {
    document.getElementById("mostrarCantPantalones").style.display = "block";
  } else {
    document.getElementById("mostrarCantPantalones").style.display = "none";
  }
  MostrarPrecioTotal();
}

function MostrarPrecioTotal() {
  let precio = 0;

  if (document.getElementById("prendaRemeras").checked == true) {
    precio +=
      parseInt(document.getElementById("cantRemeras").value) *
      /*precioRemeras*/ 15000;
  }

  if (document.getElementById("prendaBuzos").checked == true) {
    precio +=
      parseInt(document.getElementById("cantBuzos").value) *
      /*precioBuzos*/ 25000;
  }

  if (document.getElementById("prendaPantalones").checked == true) {
    precio +=
      parseInt(document.getElementById("cantPantalones").value) *
      /*precioPantalones*/ 20000;
  }

  document.getElementById("precioTotal").innerText = "Precio total: $" + precio;
}

function selectPrendaRemeras() {
  MostrarPrecioTotal();
}

function selectPrendaBuzos() {
  MostrarPrecioTotal();
}

function selectPrendaPantalones() {
  MostrarPrecioTotal();
}

const botonCalcular = document.getElementById("calcularPromo");
botonCalcular.onclick = calcularDescuento;
function calcularDescuento() {
  const todosLosItems = [];
  if (document.getElementById("prendaRemeras").checked) {
    for (let i = 0; i < document.getElementById("cantRemeras").value; i++) {
      todosLosItems.push(/*precioRemeras*/ 15000);
    }
  }
  if (document.getElementById("prendaBuzos").checked) {
    for (let i = 0; i < document.getElementById("cantBuzos").value; i++) {
      todosLosItems.push(/*precioBuzos*/ 25000);
    }
  }
  if (document.getElementById("prendaPantalones").checked) {
    for (let i = 0; i < document.getElementById("cantPantalones").value; i++) {
      todosLosItems.push(/*precioPantalones*/ 20000);
    }
  }

  const subtotal = todosLosItems.reduce(
    (acc, precioItem) => acc + precioItem,
    0
  );

  todosLosItems.sort((a, b) => a - b);
  const cantidadItemsConDescuento = Math.floor(todosLosItems.length / 2);
  let descuentoTotal = 0;
  for (let i = 0; i < cantidadItemsConDescuento; i++) {
    descuentoTotal += todosLosItems[i] * 0.5; // 50% del item
  }

  const totalFinal = subtotal - descuentoTotal;

  document.getElementById("totalFinal").innerText =
    "Precio final: $" + totalFinal;
}
