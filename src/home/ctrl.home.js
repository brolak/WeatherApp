export default class HomeController {

  constructor($scope,weather) {
    this.greeting = 'example greeting';
    this.temp = weather.data.temp;
    this.location = weather.data.location;

    this.getTemp = () => {
      this.temp = weather.getRandomWeather();
    }
  }
}