describe('CityListController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

  it('should not be using $scope to set value', function() {
    var $scope = {};
    $controller('CityListController as vm', {$scope: $scope});

    expect($scope.cities).toBe(undefined);
  });


	it('Cities should contain 5 cities', function () {
		var $scope = {};

		$controller('CityListController as vm', { $scope: $scope });

		expect(Object.keys($scope.vm.cities).length).toBe(5);
	});

  it('cities should have the properties name and population', function() {
    var $scope = {};

    $controller('CityListController as vm', { $scope: $scope });

    expect($scope.vm.cities[0].name).not.toBe(undefined);
    expect($scope.vm.cities[0].population).not.toBe(undefined);
  })


  describe('addCity function', function() {
    it('should have a function to add a city to the the cities array', function() {
      var $scope = {};

      $controller('CityListController as vm', { $scope: $scope });

      expect($scope.vm.addCity).not.toBe(undefined);
    });

    it('adds a city to the cities array when called', function() {
      var $scope = {};

      $controller('CityListController as vm', { $scope: $scope });

      var cities = $scope.vm.cities;

      $scope.vm.addCity({title: 'Seattle', population: 340000});

      expect(Object.keys($scope.vm.cities).length).toBe(6)
    })
  })

});
