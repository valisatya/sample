var recRestApp = angular.module('MyRecApp', ['ngRoute']);



recRestApp.controller('listEventCategory' , ['$scope', 'servicesData', function($scope, servicesData){
        servicesData.getEventcategories().then(function (data){
            
            $scope.catDetailsData = data.data;
            
        });
        
}]);



recRestApp.controller('viewAnnoucementPublic' , ['$scope', 'servicesData', function($scope, servicesData){
        servicesData.getAnnoucementPublic().then(function (data){
            //debugger;
            $scope.annouceDetails = data.data;
            console.log( $scope.annouceDetails);
        });
        
}]);

recRestApp.controller('ListEventsMatched', ['$scope', '$routeParams', 'servicesData', function ($scope, $routeParams, servicesData){
      
       var categoryName = $routeParams.categoryName;
       
        //console.log(categoryName);
        servicesData.getEventsList(categoryName).then(function (data){
           
            $scope.eventListMatched = data.data;
            $scope.eventCategoryAll = $scope.eventListMatched[0].CategoryNameEventData;
            //console.log($scope.eventListMatched[0].CategoryNameEventData);
            //console.log($scope.eventListMatched);
        });
}]);

recRestApp.controller('viewStatus', ['$scope',  'servicesData', function ($scope, servicesData){
      
       $scope.regID = null;
               //debugger;
       $scope.ReservationMatched =[];
       
       $scope.getReservation = function(regID){
        
        servicesData.getReservation(regID).then(function (data){
           //debugger;
            $scope.ReservationMatched = data.data;
             
           // console.log($scope.ReservationMatched);
        });
        };  //end of getReservation
}]);


recRestApp.controller('getEventDetails',['$scope', '$routeParams', 'servicesData', function ($scope, $routeParams, servicesData){
        var eventID = $routeParams.eventID;
        console.log(eventID);
        servicesData.getEventByID(eventID).then(function (data){
            //debugger;
            $scope.eventDataByID = data.data;
           //console.log($scope.eventDataByID);
        });
}]);

recRestApp.controller('registerSelEvent', ['$scope', '$routeParams', 'servicesData', function($scope, $routeParams, servicesData){
        var eventID = $routeParams.eventID;
        $scope.candidate =[];
        $scope.candidate.Gender = "male";
        $scope.candidate.EventIDReservationData = eventID;
        $scope.candidate.ConfirmationStatus = "PENDING";
        //$scope.candidate.gender = 'male';
        console.log("Event Id to be registered is"+eventID);
        function makeid()
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < 7; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
        }
        $scope.candidate.ReservationID = makeid();
        //console.log("candidate reservation ID is "+$scope.candidate.ReservationID);
        
        $scope.saveReservation = function(candidate){
           //debugger;
            
            candidate.GuardianName === undefined ? candidate.GuardianName = "N.A" : candidate.GuardianName;
            candidate.GuardianRelation === undefined ? candidate.GuardianRelation = "N.A" : candidate.GuardianRelation;
            candidate.CardNumber === undefined ? candidate.CardNumber = "N.A" : candidate.CardNumber;
            candidate.expiryMonth === undefined ? candidate.expiryMonth = "N.A" : candidate.expiryMonth;
            candidate.expiryYear === undefined ? candidate.expiryYear = "N.A" : candidate.expiryYear;
            candidate.cvv === undefined ? candidate.cvv = "N.A" : candidate.cvv;

            
            
            //console.log("candidate inside savereservation method "+ candidate.GuardianName);
            
           // servicesData.makeReservation(candidate).then(function(data){
                //debugger;                         
           //     $scope.savedSuccessRes = data.data;
           //     console.log($scope.savedSuccessRes);
          //  });
         
          servicesData.makeReservation(candidate).then(function (data){
            //debugger;
            $scope.reserveSavedData = data.data;
           console.log("id to be printed " +$scope.reserveSavedData.ReservationID);
           
         window.location = "#/successRegister/"+$scope.reserveSavedData.ReservationID;
        });
           // 
        };

        
}]);

recRestApp.controller('successRegister',['$scope', '$routeParams', 'servicesData', function ($scope, $routeParams, servicesData){
        var reservationID = $routeParams.reservationID;
        console.log('saved reservation ID is '+reservationID);
        $scope.reservationIDItem = reservationID;
        //servicesData.getEventByID(eventID).then(function (data){
            //debugger;
        //    $scope.eventDataByID = data.data;
           //console.log($scope.eventDataByID);
     //   });
}]);

recRestApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        //title: 'searchCategory',
        templateUrl: 'templates/searchCategory.html',
        controller: 'listEventCategory',
        controllerAs: 'ListEveCat'
      })
      .when('/viewStatus',{
           //title:'View Status',
           templateUrl: 'templates/viewStatus.html',
           controller: 'viewStatus',
           controllerAs: 'vwStat'
       })
       .when('/viewAnnoucementPublic',{
           //title:'View Status',
           templateUrl: 'templates/viewAnnouncementPublic.html',
           controller: 'viewAnnoucementPublic',
           controllerAs: 'vwAnncPblic'
       })
      .when('/getEvents/:categoryName', {
        //title: 'GetEvents',
        templateUrl: 'templates/getEventsMatched.html',
        controller: 'ListEventsMatched',
        controllerAs: 'ListEvents'
        
      })
       .when('/getEventByID/:eventID',{
           //title: 'GetEventByID',
           templateUrl: 'templates/getEventByID.html',
           controller: 'getEventDetails',
           controllerAs: 'EventDetails'
           
       })
       .when('/registerEventSelected/:eventID',{
           //title:'registerEventSelected',
           templateUrl: 'templates/registerSelectedEvent.html',
           controller: 'registerSelEvent',
           controllerAs: 'regEvent'
       })
        .when('/successRegister/:reservationID',{
           //title:'registerEventSelected',
           templateUrl: 'templates/successRegister.html',
           controller: 'successRegister',
           controllerAs: 'sucReg'
       })
       
       
      .otherwise({
        redirectTo: '/'
      });
}]);
//recRestApp.run(['$location', '$rootScope', function($location, $rootScope) {
//    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//        $rootScope.title = current.$$route.title;
//    });
//}]);