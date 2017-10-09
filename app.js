var request = new XMLHttpRequest()
request.addEventListener("load", function(){
  var data=this.responsetext
  var json=JSON.parse(data)
  console.log(json)
})
request.open("GET","http://restcountries.eu/rest/v1")
request.send()
