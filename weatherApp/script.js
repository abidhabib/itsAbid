let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const saerhButton=document.getElementById("search-button");














saerhButton.addEventListener("click",(e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value="";

});
const getWeather=async (city)=>{
try{
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db758e26ce89f2110819cfbbf048a06d`,
    {mode:`cors`});
    const weatherData=await response.json();
console.log(weatherData);
const {name}=weatherData;
const {feels_like}=weatherData.main;
const {id,main}=weatherData.weather[0];
loc.textContent=name;
tempvalue.textContent=Math.round(feels_like-273);
climate.textContent=main;
if(id<300 && id>200)
    {
        tempicon.src="icons/thunderstorms.png";
    }
    else if(id<400 && id>300)
    {
        tempicon.src="icons/cloud.png";
    }
   else if(id<600  && id>500)
    {
        tempicon.src="icons/rain.png";
    }
   else if(id<800 && id>700)
    {
        tempicon.src="icons/clouds.png";
    }
   else if(id==800)
    {
        tempicon.src="icons/clouds-and-sun.png";
    }
}
    

catch(error){
alert("Please enter a valid city name");
}



}



























window.addEventListener("load",()=>{
let long;
let lat;
let proxy='https://cors-anywhere.herokuapp.com/';
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
                    lat=position.coords.latitude;
                    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=db758e26ce89f2110819cfbbf048a06d`;
fetch(api).then(response=>{

    return response.json();
}).then(data=>{

    const {name}=data;
    const {feels_like}=data.main;
    const {id,main}=data.weather[0];
    loc.textContent=name;
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    if(id<300 && id>200)
    {
        tempicon.src="icons/thunderstorms.png";
    }
    else if(id<400 && id>300)
    {
        tempicon.src="icons/cloud.png";
    }
   else if(id<600  && id>500)
    {
        tempicon.src="icons/rain.png";
    }
   else if(id<800 && id>700)
    {
        tempicon.src="icons/clouds.png";
    }
  else  if(id==800)
    {
        tempicon.src="icons/clouds-and-sun.png";
    }
})
    })}
})
