https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.js
fetch('https://restcountries.eu/rest/v2/all')
.then(getJsonResponse)
.then(chartData)

function getJsonResponse(response){
  return response.json()
}

function chartData(data){

  constChartData

  console.log(data)
}

function mapDatatoChartArray(data) {

  return data.map(function(data){
    return{x:data.name, y:data.population}
}
)
}
