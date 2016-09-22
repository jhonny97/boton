// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from sn(apping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("principal",{
    url:"/principal",
    templateUrl:"templates/principal.html",
    controller: "principalCtrl"
  })
  .state("nuevaPartida",{
    url:"/principal/nuevaPartida",
    templateUrl:"templates/nuevaPartida.html",
    controller: "nuevaPartidaCtrl"
  })
  .state("ayuda",{
    url:"/principal/ayuda",
    templateUrl:"templates/ayuda.html",
    controller: "ayudaCtrl"
  })
  .state("Creditos",{
    url:"/principal/Creditos",
    templateUrl:"templates/Creditos.html",
    controller: "CrediCtrl"
  })

  $urlRouterProvider.otherwise("/principal");
})
.controller('LoadingCtrl', function($scope, $ionicLoading) {
 $scope.ir = function(){
   $scope.state()
 }

  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };
})
