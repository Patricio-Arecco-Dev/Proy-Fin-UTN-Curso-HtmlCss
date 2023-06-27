const arrayCircuits = [
    {
      calendario: 1,
      pais: "Bahrain",
      nombre: "Sakhir",
      largo: "5,412 Km",
      curvas: "15",
      vueltas: "57",
      recorrido: "308,24 Km",
      inaguracion: "2004",
    },
    {
        calendario: 2,
        pais: "Arabia Saudita",
        nombre: "Yeda",
        largo: "6,174",
        curvas: "27",
        vueltas: "50",
        recorrido: "308,45 Km",
        inaguracion: "2021",
      },
      {
        calendario: 3,
        pais: "Australia",
        nombre: "Albert Park",
        largo: "5,278 Km",
        curvas: "14",
        vueltas: "58",
        recorrido: "306,12 Km",
        inaguracion: "1996",
      },
      {
        calendario: 4,
        pais: "Azerbaiyán",
        nombre: "Callejero de Bakú",
        largo: "6,003 Km",
        curvas: "20",
        vueltas: "51",
        recorrido: "306,05 Km",
        inaguracion: "2016",
      },
      {
        calendario: 5,
        pais: "Estados Unidos",
        nombre: "Miami",
        largo: "5,412 Km",
        curvas: "19",
        vueltas: "57",
        recorrido: "308,33 ",
        inaguracion: "2022",
      },
      {
        calendario: 6,
        pais: "Italia",
        nombre: "Enzo e Dino Ferrari",
        largo: "4,909 Km",
        curvas: "19",
        vueltas: "63",
        recorrido: "309,05 Km",
        inaguracion: "1980",
      },
      {
        calendario: 7,
        pais: "Mónaco",
        nombre: "Callejero de Monte Carlo",
        largo: "3,337 Km",
        curvas: "19",
        vueltas: "78",
        recorrido: "260,29 Km",
        inaguracion: "1950",
      },
      {
        calendario: 8,
        pais: "España",
        nombre: "Barcelona-Catalunya",
        largo: "4,675 Km",
        curvas: "16",
        vueltas: "66",
        recorrido: "308,42 Km",
        inaguracion: "1991",
      },
      {
        calendario: 9,
        pais: "Canadá",
        nombre: "Gilles Villeneuve",
        largo: "4,361 Km",
        curvas: "14",
        vueltas: "70",
        recorrido: "305,27 ",
        inaguracion: "1978",
      },
      {
        calendario: 10,
        pais: "Austria",
        nombre: "Red Bull Ring",
        largo: "4,318 Km",
        curvas: "10",
        vueltas: "71",
        recorrido: "306,45 Km",
        inaguracion: "1970",
      },
      {
        calendario: 11,
        pais: "Gran Bretaña",
        nombre: "Silverstone",
        largo: "5,891 Km",
        curvas: "18",
        vueltas: "52",
        recorrido: "306,20 Km",
        inaguracion: "1950",
      },
      {
        calendario: 12,
        pais: "Hungría",
        nombre: "Hungaroring",
        largo: "4,381 Km",
        curvas: "14",
        vueltas: "70",
        recorrido: "306,63 Km",
        inaguracion: "1986",
      },
      {
        calendario: 13,
        pais: "Bélgica",
        nombre: "Spa-Francorchamps",
        largo: "7,004 Km",
        curvas: "19",
        vueltas: "44",
        recorrido: "308,05 Km",
        inaguracion: "1950",
      },
      {
        calendario: 14,
        pais: "Países Bajos",
        nombre: "Zandvoort",
        largo: "4,259 Km",
        curvas: "14",
        vueltas: "72",
        recorrido: "306,59 Km",
        inaguracion: "1952",
      },
      {
        calendario: 15,
        pais: "Italia",
        nombre: "Monza",
        largo: "5,793 Km",
        curvas: "11",
        vueltas: "53",
        recorrido: "306,72 Km",
        inaguracion: "1950",
      },
      {
        calendario: 16,
        pais: "Singapur",
        nombre: "Marina Bay",
        largo: "5,063 Km",
        curvas: "23",
        vueltas: "61",
        recorrido: "308,71 Km",
        inaguracion: "2008",
      },
      {
        calendario: 17,
        pais: "Japón",
        nombre: "Suzuka",
        largo: "5,807 Km",
        curvas: "18",
        vueltas: "53",
        recorrido: "307,47 Km",
        inaguracion: "1987",
      },
      {
        calendario: 18,
        pais: "Qatar",
        nombre: "Losail",
        largo: "5,380 Km",
        curvas: "16",
        vueltas: "57",
        recorrido: "308,83 Km",
        inaguracion: "2021",
      },
      {
        calendario: 19,
        pais: "Estados Unidos",
        nombre: "Circuito de las Américas",
        largo: "5,513 Km",
        curvas: "20",
        vueltas: "56",
        recorrido: "308,41 Km",
        inaguracion: "2012",
      },
      {
        calendario: 20,
        pais: "México",
        nombre: "Hermanos Rodríguez",
        largo: "4,304 Km",
        curvas: "17",
        vueltas: "71",
        recorrido: "305,35 Km",
        inaguracion: "1963",
      },
      {
        calendario: 21,
        pais: "Brasil",
        nombre: "José Carlos Pace",
        largo: "4,309 Km",
        curvas: "15",
        vueltas: "71",
        recorrido: "305,88 Km",
        inaguracion: "1973",
      },
      {
        calendario: 22,
        pais: "Estados Unidos",
        nombre: "Callejero de Las Vegas",
        largo: "6,120 Km",
        curvas: "17",
        vueltas: "50",
        recorrido: "305,88 Km",
        inaguracion: "2023",
      },
      {
        calendario: 23,
        pais: "Abu Dhabi",
        nombre: "Yas Marina",
        largo: "5,281 Km",
        curvas: "16",
        vueltas: "58",
        recorrido: "306,18 Km",
        inaguracion: "2009",
      },
  ];
  /*  falta de aqui en adelante */
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
  