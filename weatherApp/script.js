let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const saerhButton=document.getElementById("search-button");

window.addEventListener("load",()=>{
//fetching the current location
let long;
let lat;
const proxy="https://cors-anywhere.herokuapp.com/"
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            
            lat=position.coords.latitude;
            long=position.coords.longitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={db758e26ce89f2110819cfbbf048a06d`
        fetch(api).then((response)=>{
            return response.json();
        })})
.then(data=>{
    const {name}=data;
    const {feels_like}=data.main;
    const {id,main}=data.weather[0];
    loc.textContent=name;
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like);

}) 
}})
