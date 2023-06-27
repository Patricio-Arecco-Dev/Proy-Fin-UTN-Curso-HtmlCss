const arrayTeams = [
  {
    nombre: "Oracle Red Bull Racing",
    paisorigen: "Austria",
    paisbase: "Gran Bretaña",
    debut: "1997",
    campeonatos: "5",
    mejorposicion: "1 (x100)",
    mejorclasif: "88",
  },
  {
    nombre: "Aston Martin Aramco Cognizant",
    paisorigen: "Gran Bretaña",
    paisbase: "Gran Bretaña",
    debut: "2018",
    campeonatos: "0",
    mejorposicion: "1 (x1)",
    mejorclasif: "1",
  },
  {
    nombre: "Mercedes-AMG PETRONAS",
    paisorigen: "Alemania",
    paisbase: "Gran Bretaña",
    debut: "1970",
    campeonatos: "8",
    mejorposicion: "1 (x116)",
    mejorclasif: "128",
  },
  {
    nombre: "Scuderia Ferrari",
    paisorigen: "Italia",
    paisbase: "Italia",
    debut: "1950",
    campeonatos: "16",
    mejorposicion: "1 (x243)",
    mejorclasif: "244",
  },
  {
    nombre: "McLaren",
    paisorigen: "Gran Bretaña",
    paisbase: "Gran Bretaña",
    debut: "1966",
    campeonatos: "8",
    mejorposicion: "1 (x183)",
    mejorclasif: "156",
  },
  {
    nombre: "BWT Alpine",
    paisorigen: "Francia",
    paisbase: "Gran Bretaña",
    debut: "1986",
    campeonatos: "0",
    mejorposicion: "1 (x21)",
    mejorclasif: "20",
  },
  {
    nombre: "MoneyGram Haas",
    paisorigen: "Estados Unidos",
    paisbase: "Estados Unidos",
    debut: "2016",
    campeonatos: "0",
    mejorposicion: "4 (x1)",
    mejorclasif: "1",
  },
  {
    nombre: "Alfa Romeo Stake",
    paisorigen: "Suiza",
    paisbase: "Suiza",
    debut: "1993",
    campeonatos: "0",
    mejorposicion: "1 (x1)",
    mejorclasif: "1",
  },
  {
    nombre: "Scuderia AlphaTauri",
    paisorigen: "Italia",
    paisbase: "Italia",
    debut: "1985",
    campeonatos: "0",
    mejorposicion: "1 (x2)",
    mejorclasif: "1",
  },
  {
    nombre: "Williams Racing",
    paisorigen: "Gran Bretaña",
    paisbase: "Gran Bretaña",
    debut: "1978",
    campeonatos: "9",
    mejorposicion: "1 (x114)",
    mejorclasif: "128",
  },
];

let nombreTemp = document.getElementById("idNombre");
let paisorigenTemp = document.getElementById("idPaisOrigen");
let paisbaseTemp = document.getElementById("idPaisBase");
let debutTemp = document.getElementById("idDebut");
let campeonatosTemp = document.getElementById("idCampeonatos");
let mejorposicionTemp = document.getElementById("idMejorPos");
let mejorclasifTemp = document.getElementById("idMejorClas");

let indice = 0;
let indiceCircuito = 0;

function funTeams(indice) {
  indiceEquipo = indice - 1;

  nombreTemp.innerHTML = `Nombre: &nbsp ${arrayTeams[indiceEquipo].nombre}`;
  paisorigenTemp.innerHTML = `País Origen: &nbsp ${arrayTeams[indiceEquipo].paisorigen}`;
  paisbaseTemp.innerHTML = `País Base: &nbsp ${arrayTeams[indiceEquipo].paisbase}`;
  debutTemp.innerHTML = `Debut: &nbsp ${arrayTeams[indiceEquipo].debut}`;
  campeonatosTemp.innerHTML = `Campeonatos: &nbsp ${arrayTeams[indiceEquipo].campeonatos}`;
  mejorposicionTemp.innerHTML = `Mejor Posición: &nbsp ${arrayTeams[indiceEquipo].mejorposicion}`;
  mejorclasifTemp.innerHTML = `Mejor Clasificación: &nbsp ${arrayTeams[indiceEquipo].mejorclasif}`;
}
