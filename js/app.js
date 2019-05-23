// init weather
const weather= new  Weather("Charlotte");

// init UI

const ui=new UI();

// get weather 

document.addEventListener("DOMContentLoaded",getWeather)

// change location event

document.querySelector("#w-change-btn").addEventListener("click",(e)=>{
const city = document.querySelector("#city").value;

weather.changeLocation(city);

getWeather();

$("#locModal").modal("hide")
})

function getWeather(){
    weather.getWeather()
.then(res=>{

    ui.paint(res)
    console.log(res)
})
.catch(err=>console.log(err))}