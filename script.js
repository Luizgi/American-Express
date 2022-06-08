function rio(){
  navigator.geolocation.getCurrentPosition(mostraPosicao1)
}

function mostraPosicao1(pos){
  var lt = -22.908333
  var lg = -43.196388

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}


function orlando(){
  navigator.geolocation.getCurrentPosition(mostraPosicao2)
}

function mostraPosicao2(pos){
  var lt = 28.4159
  var lg = -81.2988

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}



function tokyo(){
  navigator.geolocation.getCurrentPosition(mostraPosicao3)
}

function mostraPosicao3(pos){
  var lt =  35.6894
  var lg = 139.692

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}

function paris(){
  navigator.geolocation.getCurrentPosition(mostraPosicao4)
}

function mostraPosicao4(pos){
  var lt =  48.864716
  var lg = 2.349014

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}

function italia(){
  navigator.geolocation.getCurrentPosition(mostraPosicao5)
}

function mostraPosicao5(pos){
  var lt =  41.87194
  var lg = 12.56738

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}


function mg(){
  navigator.geolocation.getCurrentPosition(mostraPosicao6)
}

function mostraPosicao6(pos){
  var lt =  -19.912998
  var lg = -43.940933

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}


function sp(){
  navigator.geolocation.getCurrentPosition(mostraPosicao7)
}

function mostraPosicao7(pos){
  var lt =  -23.5489
  var lg = -46.6388

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}


function brasilia(){
  navigator.geolocation.getCurrentPosition(mostraPosicao8)
}

function mostraPosicao8(pos){
  var lt =  -15.7801
  var lg = -47.929215

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}


function es(){
  navigator.geolocation.getCurrentPosition(mostraPosicao9)
}

function mostraPosicao9(pos){
  var lt =  -20.3222
  var lg =  -40.338120

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVnaXgiLCJhIjoiY2w0NHN5ODF6NTYwbzNlcDdrZWVyNGkxbyJ9.CB4bsDXNNwfFP5WkGo4J8w'
  }).addTo(map);
  
}

function refreshPage(){
    window.location.reload();
} 
 function converter(){
     var quantia = document.getElementById("quantia").value

   var valorConvertido = quantia/ 30 

   document.getElementById("res").innerHTML = valorConvertido.toFixed(2)
 }
