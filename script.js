	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/projects', {
				templateUrl : 'pages/projects.html',
				controller  : 'projectsController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});


	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'I am a junior at the University of Southern California studying Aerospace Engineering and Computer Engineering/Computer Science.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Jordi Sim|(408) 637-1386|jordisim@usc.edu';
	});

	scotchApp.controller('projectsController', function($scope) {
		$scope.message = 'Projects are great!';
	});
