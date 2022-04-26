"use strict";

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // quantos milésimos valem 1 segundo

var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

function pause() {
  document.getElementById("playReturn").innerText = "Retomar";
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById("timing").innerText = "00:00:00";
  document.getElementById("playReturn").innerText = "Iniciar";
}

function timer() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
    if (mm == 60) {
      mm = 0;
      hh++;
    }
  }

  // Instrução Ternaria
  // Se hh é MAIOR que 10 ENTÃO "0" + hh SE NÃO hh

  // ** Operadores **
  // ? = Então
  // : = Se não

  var format =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);

  document.getElementById("timing").innerText = format;
}
