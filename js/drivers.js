const arrayDrivers = [
  {
    dorsal: 1,
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "Países Bajos",
    nacimiento: "30/09/1997",
    debut: "2015",
    campeonatos: "2",
  },
  {
    dorsal: 11,
    nombre: "Sergio",
    apellido: "Perez",
    nacionalidad: "Mexico",
    nacimiento: "26/01/1990",
    debut: "2011",
    campeonatos: "0",
  },
  {
    dorsal: 14,
    nombre: "Fernando",
    apellido: "Alonso",
    nacionalidad: "España",
    nacimiento: "29/07/1981",
    debut: "2003",
    campeonatos: "2",
  },

  {
    dorsal: 18,
    nombre: "Lance",
    apellido: "Stroll",
    nacionalidad: "Canada",
    nacimiento: "29/10/1998",
    debut: "2017",
    campeonatos: "0",
  },

  {
    dorsal: 44,
    nombre: "Lewis",
    apellido: "Hamilton",
    nacionalidad: "Gran Bretaña",
    nacimiento: "07/01/1985",
    debut: "2007",
    campeonatos: "7",
  },

  {
    dorsal: 63,
    nombre: "George",
    apellido: "Russell",
    nacionalidad: "Gran Bretaña",
    nacimiento: "15/02/1998",
    debut: "2019",
    campeonatos: "0",
  },

  {
    dorsal: 55,
    nombre: "Carlos",
    apellido: "Sainz",
    nacionalidad: "España",
    nacimiento: "01/09/1994",
    debut: "2015",
    campeonatos: "0",
  },

  {
    dorsal: 16,
    nombre: "Charles",
    apellido: "Leclerc",
    nacionalidad: "Monaco",
    nacimiento: "16/10/1997",
    debut: "2018",
    campeonatos: "0",
  },

  {
    dorsal: 4,
    nombre: "Lando",
    apellido: "Norris",
    nacionalidad: "Gran Bretaña",
    nacimiento: "13/11/1999",
    debut: "2019",
    campeonatos: "0",
  },

  {
    dorsal: 82,
    nombre: "Oscar",
    apellido: "Piastri",
    nacionalidad: "Australia",
    nacimiento: "04/06/2001",
    debut: "2023",
    campeonatos: "0",
  },

  {
    dorsal: 10,
    nombre: "Pierre",
    apellido: "Gasly",
    nacionalidad: "Francia",
    nacimiento: "17/02/1996",
    debut: "2017",
    campeonatos: "0",
  },

  {
    dorsal: 31,
    nombre: "Esteban",
    apellido: "Ocon",
    nacionalidad: "Francia",
    nacimiento: "17/09/1996",
    debut: "2016",
    campeonatos: "0",
  },

  {
    dorsal: 27,
    nombre: "Nico",
    apellido: "Hulkenberg",
    nacionalidad: "Alemania",
    nacimiento: "19/08/1987",
    debut: "2010",
    campeonatos: "0",
  },

  {
    dorsal: 20,
    nombre: "Kevin",
    apellido: "Magnussen",
    nacionalidad: "Dinamarca",
    nacimiento: "05/10/1992",
    debut: "2014",
    campeonatos: "0",
  },

  {
    dorsal: 77,
    nombre: "Valtteri",
    apellido: "Bottas",
    nacionalidad: "Finlandia",
    nacimiento: "28/08/1989",
    debut: "2013",
    campeonatos: "0",
  },

  {
    dorsal: 24,
    nombre: "Zhou",
    apellido: "Guanyu",
    nacionalidad: "China",
    nacimiento: "30/05/1999",
    debut: "2022",
    campeonatos: "0",
  },

  {
    dorsal: 22,
    nombre: "Yuki",
    apellido: "Tsunoda",
    nacionalidad: "Japon",
    nacimiento: "11/05/2000",
    debut: "2021",
    campeonatos: "0",
  },

  {
    dorsal: 21,
    nombre: "Nick",
    apellido: "De Vries",
    nacionalidad: "Países Bajos",
    nacimiento: "06/02/1995",
    debut: "2022",
    campeonatos: "0",
  },

  {
    dorsal: 23,
    nombre: "Alexander",
    apellido: "Albon",
    nacionalidad: "Tailandia",
    nacimiento: "23/03/1996",
    debut: "2019",
    campeonatos: "0",
  },

  {
    dorsal: 2,
    nombre: "Logan",
    apellido: "Sargeant",
    nacionalidad: "Estados Unidos",
    nacimiento: "31/12/2000",
    debut: "2023",
    campeonatos: "0",
  },
];

let nombreTemp = document.getElementById("driNombre");
let apellidoTemp = document.getElementById("driApellido");
let nacionalidadTemp = document.getElementById("driPais");
let nacimientoTemp = document.getElementById("driNacio");
let debutTemp = document.getElementById("driDebut");
let campeonatosTemp = document.getElementById("driCamp");

function funDriver(numero) {
  let indice = 0;
  let indicePiloto = 0;
  for (objetoPiloto of arrayDrivers) {
    if (objetoPiloto.dorsal == numero) {
      indicePiloto = indice;
    }
    indice++;
  }
  nombreTemp.innerHTML = `Nombre: &nbsp ${arrayDrivers[indicePiloto].nombre}`;
  apellidoTemp.innerHTML = `Apellido: &nbsp ${arrayDrivers[indicePiloto].apellido}`;
  nacionalidadTemp.innerHTML = `País: &nbsp ${arrayDrivers[indicePiloto].nacionalidad}`;
  nacimientoTemp.innerHTML = `Fecha Nac: &nbsp ${arrayDrivers[indicePiloto].nacimiento}`;
  debutTemp.innerHTML = `Año Debut: &nbsp ${arrayDrivers[indicePiloto].debut}`;
  campeonatosTemp.innerHTML = `Campeonatos: &nbsp ${arrayDrivers[indicePiloto].campeonatos}`;
}
