  const allCountries = fetch('https://restcountries.eu/rest/v2/all')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.map(function(a) {
        addRowToTable(a.name, a.population, a.capital.toLocaleString('en-UK'))});
    });

    function addRowToTable (name, population, capital){
      console.log (name,population,capital)
      const row = document.createElement("tr")
      const tdCountry = document.createElement("td")
      const tdPopulation = document.createElement("td")
      const tdCapital = document.createElement("td")
      tdCountry.innerText = name
      tdPopulation.innerText = population
      tdCapital.innerText = capital


    row.appendChild(tdCountry)
    row.appendChild(tdPopulation)
    row.appendChild(tdCapital)
    const table = document.querySelector("table")
    table.appendChild(row)

    }
