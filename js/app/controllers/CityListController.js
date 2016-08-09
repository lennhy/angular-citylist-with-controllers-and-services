
function CityListController() {
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
}

angular
  .module('app')
  .controller('CityListController', CityListController);
