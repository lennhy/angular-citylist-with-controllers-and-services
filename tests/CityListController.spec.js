var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function annotate (fn) {
	var $inject = [];
	fn = fn.toString();
	var first = fn.replace(STRIP_COMMENTS, '');
	var second = first.match(FN_ARGS)[1];
	var third = second.split(FN_ARG_SPLIT);
	third.forEach(function (arg) {
		arg.replace(FN_ARG, function (all, underscore, name) {
			$inject.push(name);
		});
	});
	return $inject;
}


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

	describe('$inject', function() {
		var annotated = annotate(CityListController);

		it('should have a $inject property', function() {
			expect(CityListController.$inject).not.toBe(undefined);
		});

		it('should have $scope and $timeout in the $inject property', function() {
			expect(CityListController.$inject[0]).toBe('$scope');
			expect(CityListController.$inject[1]).toBe('$timeout');
		});
	});


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

	describe('updateCityPopulation function', function() {
		it('should call $timeout with a delay of 2000 milliseconds', function() {
			var $scope = {};
			var time;

			function mockTimeout(func, milliseconds) {
				time = milliseconds;
			}

			$controller('CityListController as vm', { $scope: $scope, $timeout: mockTimeout });

			expect(time).toBe(2000);
		});

		it('changes the population of a city', function() {
			var $scope = {};

			$controller('CityListController as vm', { $scope: $scope });

			$scope.vm.updateCityPopulation({name: 'San Diego', population: 20000000});

			expect($scope.vm.cities[0].population).toBe(20000000);
		})
	})

});
