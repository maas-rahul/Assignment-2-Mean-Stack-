/*function AppCtrl(){
    console.log("Hello world from controller..")
}*/


var report = angular.module('report', []);

report.controller('reportcontroller',['$scope',function($scope, $http){

    /*$http.get('/contactlist').then(function(response){
        console.log('heloo');
        $scope.contactlist = response;
    });*/
    $http.get('/api')
  .then(({ data }) => {
    $scope.message = data;
      console.log('Data: ' + data);
   }, err => {
     console.log('Error: ' + err);
   });
   

    //$scope.contactlist = contactlist;

    console.log("Hello world from controller..");
}]);