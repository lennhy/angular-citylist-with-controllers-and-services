
function CityListController($timeout) {
  this.cities = [
    {
      name: 'San Diego',
      population: 3500000
    },
    {
      name: 'Los Angelas',
      population: 7600000
    },
    {
      name: 'NYC',
      population: 12000000
    },
    {
      name: 'San Francisco',
      population: 4500000
    },
    {
      name: 'Tokyo',
      population: 15000000
    }
  ]

  this.addCity = function(city) {
    this.cities.push(city);
  }

  $timeout(this.updateCityPopulation = function(city) {
    var i;
    for (i = 0; i < this.cities.length; i++) {
      if (this.cities[i].name === city.name) {
        this.cities[i].population = city.population;
      }
    }
  }, 2000);

}

angular
  .module('app')
  .controller('CityListController', CityListController);
