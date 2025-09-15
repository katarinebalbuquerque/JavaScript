/**
 * Conversor:
 * 
 * Temperatura
 * Moeda
 * Medida
 * Tempo
 * Bases Numérica
 */

// Conversor de Temperatura

// Celsius para Fahrenheit
const resp0 = document.getElementById("resp0");
const resp1 = document.getElementById("resp1");
const c = document.getElementById("c");

function celsiusToFahrenheit() {
      let celsius = Number(c.value);
      resp0.innerText = ((celsius * 9 / 5) + 32).toFixed(2) + " Fahrenheit";
}

// Celsius para Kelvin
function celsiusToKelvin() {
      let celsius = Number(c.value);
      resp1.innerText =  (celsius + 273.15).toFixed(2) + " Kelvin";
}

function toFahrenheitKelvin() {
      celsiusToFahrenheit();
      celsiusToKelvin();
}

// Conversor de Moedas

const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");
const brl = document.getElementById("brl");
const dolar = document.getElementById("dolar");
const euro = document.getElementById("euro");

function realToDolar() {
      let br = Number(brl.value);
      let dol = Number(dolar.value);
      resp2.innerText =  (br / dol).toFixed(2) + " Dólar";
}

function realToEuro() {
      let br = Number(brl.value);
      let eur = Number(euro.value);
      resp3.innerText =  (br / eur).toFixed(2) + " Euro";
}

function toDolarEuro() {
      realToDolar();
      realToEuro();
}

// Conversor de Medidas

const resp4 = document.getElementById("resp4");
const resp5 = document.getElementById("resp5");
const km = document.getElementById("km");
const m = document.getElementById("metro");

// Km para Milhas
function kmToMilhas() {
      let quilometro = Number(km.value);
      resp4.innerText = (quilometro * 0.621371).toFixed(2) + " Milha(s)";
}

// Metros para Centímetros
function metrosToCm() {
      let metro = Number(m.value);
      resp5.innerText = (metro * 100).toFixed(2) + " Centímetro(s)";
}

// Conversor de Tempo

const resp6 = document.getElementById("resp6");
const resp7 = document.getElementById("resp7");
const h = document.getElementById("hora");

// Horas para Minutos
function horasToMinutos() {
      let hora = Number(h.value);
      resp6.innerText = (hora * 60) + " Minuto(s)";
}

// Horas para Segundos
function horasToSegundos() {
      let hora = Number(h.value);
      resp7.innerText = (hora * 3600) + " Segundo(s)";
}

function toMinutoSegundos() {
      horasToMinutos();
      horasToSegundos();
}

// Conversor de Bases Numéricas

const resp8 = document.getElementById("resp8");
const resp9 = document.getElementById("resp9");
const num = document.getElementById("numero");

// Decimal para Binário
function decimalToBinario() {
      let n = Number(num.value);
      resp8.innerText = n.toString(2);
}

// Decimal para Hexadecimal
function decimalToHex() {
      let n = Number(num.value);
      resp9.innerText = n.toString(16).toUpperCase();
}

function calculoBaseNumerica() {
      decimalToBinario();
      decimalToHex();
}