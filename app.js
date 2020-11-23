var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;

function imprimirTabla() {
  document.write(
    '<link rel="stylesheet" href="estilos.css">' +
      "<h1>TRES EN RAYA </h1> " +
      "<table>" +
      "<tr>" +
      '<td id="celda0" onclick = "pincharcelda(0)"></td>' +
      '<td id="celda1" onclick = "pincharcelda(1)"></td>' +
      '<td id="celda2" onclick = "pincharcelda(2)"></td>' +
      "</tr>" +
      "<tr>" +
      '<td id="celda3" onclick = "pincharcelda(3)"></td>' +
      '<td id="celda4" onclick = "pincharcelda(4)"></td>' +
      '<td id="celda5" onclick = "pincharcelda(5)"></td>' +
      "</tr>" +
      "<tr>" +
      '<td id="celda6" onclick = "pincharcelda(6)"></td>' +
      '<td id="celda7" onclick = "pincharcelda(7)"></td>' +
      '<td id="celda8" onclick = "pincharcelda(8)"></td>' +
      "</tr>" +
      "</table>" +
      '<input id="reinicio" type="submit" value="Reiniciar" onclick="location.reload()">'
  );
}

function pintar() {
  for (i = 0; i < 9; i++) {
    if (mapa[i] == 0) {
      document.getElementById("celda" + i).style.backgroundColor = "white";
    }
    if (mapa[i] == 1) {
      document.getElementById("celda" + i).style.backgroundColor = "red";
    }
    if (mapa[i] == 2) {
      document.getElementById("celda" + i).style.backgroundColor = "blue";
    }
  }
}

function pincharcelda(celda) {
  if (mapa[celda] == 0) {
    if (jugador == 1) {
      mapa[celda] = 1;
      jugador = 2;
    } else {
      mapa[celda] = 2;
      jugador = 1;
    }
  } else {
    alert("No puedes pulsar sobre una celda coloreada");
  }
  pintar();
  var campeon = ganador();
  switch (campeon) {
    case 0:
      break;
    case 1:
      alert("Ganó el rojo!");
      break;
    case 2:
      alert("Ganó el azul!");
      break;
    case 3:
      alert("Empate");
      break;
  }
}

function ganador() {
  var numEspacios = 0;
  for (i = 0; i < 9; i++) {
    if (mapa[i] == 0) numEspacios++;
  }

  if (mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] != 0) {
    return mapa[0];
  }

  if (mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] != 0) {
    return mapa[3];
  }

  if (mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] != 0) {
    return mapa[6];
  }

  if (mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] != 0) {
    return mapa[0];
  }

  if (mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] != 0) {
    return mapa[1];
  }

  if (mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] != 0) {
    return mapa[2];
  }

  if (mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] != 0) {
    return mapa[0];
  }

  if (mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] != 0) {
    return mapa[2];
  }

  if (numEspacios > 0) {
    return 0;
  } else {
    return 3;
  }
}

imprimirTabla();
