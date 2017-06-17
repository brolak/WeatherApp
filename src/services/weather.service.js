import angular from 'angular';

class Weather {
  constructor() {
    this.data = {
      temp: 25,
      location: "Toronto"
    }
  };

  getRandomWeather() {
    const rand = Math.floor(Math.random() * 55);
    return rand;
  }
}

export default angular.module('services.weather', [])
  .service('weather', Weather)
  .name;