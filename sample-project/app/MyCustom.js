
var recApp=angular.module('myRecreation',[]);

recApp.controller('retrieveEventCat' , ['$scope', 'retrieveCatData', function($scope, retrieveCatData){
        var receivedCatData = retrieveCatData.categoryDetails();
        receivedCatData.then(function(data){
            $scope.catDetailsData = data;
        })
        
}]);
