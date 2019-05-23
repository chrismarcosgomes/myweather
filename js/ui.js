// connect data to page
class UI {
  constructor() {
      this.location = document.querySelector('#w-location');
      this.desc = document.querySelector('#w-desc');
      this.string = document.querySelector('#w-string');
      this.detail = document.querySelector('#w-detail');
      this.maxTemp = document.querySelector('#w-maxtemp');
      this.tempMin = document.querySelector('#w-tempMin');
      this.humid = document.querySelector('#w-humid');
  }
  // connect json with my ui with . notation
  paint(weather){
      this.location.textContent= weather.name;
      this.desc.textContent = "Forecast for today is: "+weather.weather[0].main;
      this.string.textContent = Math.floor(weather.main.temp)+"℉";

    
      this.detail.textContent = `Forcast :` +weather.weather[0].description;
      this.humid.textContent = weather.main.humidity+"%";
      this.maxTemp.textContent = Math.floor(weather.main.temp_max)+"℉";
      this.tempMin.textContent = Math.floor(weather.main.temp_min)+`℉`;



  }
}


