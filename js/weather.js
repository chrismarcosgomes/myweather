class Weather {
  constructor(city){
      this.apiKey="3930ca47f20a93c8a3c5a54be446f11c"
      this.city=city;
  }

  // fetch weather from api

  async getWeather(){
      const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=imperial`)
  
      const responseData= await response.json()

      return responseData;

  }

  changeLocation(city){
      this.city=city
  }
}