
var recRestAdminApp = angular.module('MyAdminApp', ['ngRoute']);



recRestAdminApp.controller('eventCategoryList' , ['$scope', 'servicesData',  '$rootScope', '$location', function($scope, servicesData, $rootScope, $location){
        
        $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
        servicesData.getEventcategories().then(function (data){
            
            $scope.categories = data.data;
            
        });
        
        $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
    }
}]);


recRestAdminApp.controller('editCategory', function ($scope, $rootScope, $location, $routeParams, servicesData, category) {
    
        $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
    
    
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
            
        
    var categoryID = ($routeParams.categoryID) ? parseInt($routeParams.categoryID) : 0;
    $rootScope.title = (categoryID > 0) ? 'Edit Categories' : 'Add Category';
    $scope.buttonText = (categoryID > 0) ? 'Update Category' : 'Add New Category';
    //debugger;  
    
    var original = category.data;
      original._id = categoryID;
      $scope.category = angular.copy(original);
      $scope.category._id = categoryID;
      
      
      $scope.isClean = function() {
        return angular.equals(original, $scope.category);
      };
      
      $scope.saveCategory = function(category) {
          debugger;
        $location.path('/');
        if (categoryID <= 0) {
            servicesData.insertCategory(category);
        }
        else {
            servicesData.updateCategory(categoryID, category);
        }
    };
    
    $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
    
    
    }   //ende of else checking session storage
});


recRestAdminApp.controller('eventsList' , ['$scope', 'servicesData', '$rootScope', '$location', function($scope, servicesData, $rootScope, $location){
        $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
        
        
        servicesData.getEventsListAll().then(function (data){
            //debugger;
            
            $scope.allEvents = data.data;
            console.log($scope.allEvents);
            
        });
        
        $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
        
        
        }
}]);

recRestAdminApp.controller('adminLoginCtrl', function($scope, $rootScope, $location, servicesData){
    $rootScope.adminID = null;
    $rootScope.adminName = null;
    $rootScope.title = 'admin login';
    
    $scope.admin =[];
    $scope.admin.AdminID = $rootScope.adminID;
    $scope.admin.AdminName = null;
    $scope.admin.AdminPassword = null;
    
    $scope.getAdmin = function (admin){
        //debugger;
         //$location.path('/');
         servicesData.getAdminByCredentials(admin).then(function (data){
            //debugger;
            $scope.adminData = data.data;
            
            if($scope.adminData.AdminID === undefined){
                $location.path('/adminLogin');
                $rootScope.adminID = null;
                $scope.admin.AdminID = $rootScope.adminID;
                $scope.admin.AdminName = null;
                $scope.admin.AdminPassword = null;
                $scope.errorLoginMsg = 'INVALID';
            }
            else{
                $location.path('/');
                $rootScope.adminID = $scope.adminData.AdminID;
                $rootScope.adminName = $scope.adminData.AdminName;
                
                sessionStorage.setItem("adminUserID",$scope.adminData.AdminID);
                sessionStorage.setItem("adminUserName", $scope.adminData.AdminName);
            }
           //console.log($scope.eventDataByID);
        });
    };
    
});

recRestAdminApp.controller('editEvent', function ($scope, $rootScope, $location, $routeParams, servicesData, event) {
    $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
    
    
    var eventID = ($routeParams.eventID) ? parseInt($routeParams.eventID) : 0;
    $rootScope.title = (eventID > 0) ? 'Edit Events' : 'Add Event';
    $scope.buttonText = (eventID > 0) ? 'Update Event' : 'Add New Event';
      
    
    var original = event.data;
    
   // var typedec = original.StartDate;
   // $scope.startDate =new Date(typedec);
   // var newdate = $scope.startDate;
   // original.StartDate = newdate;
    
      original._id = eventID;
      //debugger;
      $scope.event = angular.copy(original);
      $scope.event._id = eventID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.event);
      };
      
      servicesData.getEventcategories().then(function (data){
           //debugger;
            $scope.categ = data.data;
           
            
        });

      $scope.saveEvent = function(event) {
        $location.path('/manageEvents');
        if (eventID <= 0) {
            
            servicesData.insertEvent(event);
        }
        else {
            
            servicesData.updateEvent(eventID, event);
        }
    };
    
    $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
    
    
        }   //end of else at session storage checking
});




recRestAdminApp.controller('reservationsList' , ['$scope', 'servicesData', '$rootScope', '$location', function($scope, servicesData, $rootScope, $location){
        $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
        
        
        servicesData.getReservationListAll().then(function (data){
            //debugger;
            
            $scope.allReservations = data.data;
            console.log($scope.allReservations);
            
        });
              $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
        
        
        }
}]);  
     

recRestAdminApp.controller('editResv', function ($scope, $rootScope, $location, $routeParams, servicesData, reservation) {
    $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
    
    
    var reservationID = ($routeParams.reservationID) ? ($routeParams.reservationID) : 0;
    $rootScope.title = (reservationID !== undefined || reservationID !== null ) ? 'Edit Reservation' : 'Add Reservation';
    $scope.buttonText = (reservationID !== undefined || reservationID !== null ) ? 'Update Reservation' : 'Add New Event';
      
    
    var original = reservation.data;
    
   // var typedec = original.StartDate;
   // $scope.startDate =new Date(typedec);
   // var newdate = $scope.startDate;
   // original.StartDate = newdate;
    
      original._id = reservationID;
      //debugger;
      $scope.reservation = angular.copy(original);
      $scope.reservation._id = reservationID;
      //debugger;
      var ConfirmationStatusBefore = $scope.reservation.ConfirmationStatus;
      $scope.isClean = function() {
        return angular.equals(original, $scope.reservation);
      };
      
      servicesData.getEventcategories().then(function (data){
           //debugger;
            $scope.categ = data.data; 
        });

      $scope.saveReservation = function(reservation) {
        $location.path('/manageReservations');
        
        if (reservationID !== undefined || reservationID !== "") {
            reservation.AdminIDReservationData = $rootScope.adminID;
            if((ConfirmationStatusBefore ==='PENDING' && reservation.ConfirmationStatus ==='NO')||(ConfirmationStatusBefore ==='YES' && reservation.ConfirmationStatus ==='NO')){
                
                servicesData.updateReservationIncreaseCount(reservationID, reservation);
            }
            else if((ConfirmationStatusBefore ==='NO' && reservation.ConfirmationStatus ==='PENDING') || (ConfirmationStatusBefore ==='NO' && reservation.ConfirmationStatus ==='YES')){
                servicesData.updateReservationReduceCount(reservationID, reservation, reservation.EventIDReservationData);
            }
            else{ 
            servicesData.updateReservation(reservationID, reservation);
            }
        }   //end of if checking reservation ID is valid or not
    };
    
    $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
    
    
        }   //end of else at session storage checking
});



recRestAdminApp.controller('AnnouncementList' , ['$scope', 'servicesData', '$rootScope', '$location', function($scope, servicesData, $rootScope, $location){
        $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
        
        
        servicesData.getAnnouncementAll().then(function (data){
            //debugger;
            
            $scope.allAnnouncements = data.data;
            console.log($scope.allAnnouncements);
            
        });
              $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };
        
        
        }
}]); 
            
        
 
recRestAdminApp.controller('editAnnouncement', function ($scope, $rootScope, $location, $routeParams, servicesData, announcement) {
    $rootScope.adminID = sessionStorage.getItem("adminUserID");
        $rootScope.adminName = sessionStorage.getItem("adminUserName");
        $scope.adminIDLogged =  $rootScope.adminID;
        $scope.adminNameLogged = $rootScope.adminName;
        if($rootScope.adminID === "" || $rootScope.adminID ===undefined || $rootScope.adminID ===null){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserName", "");
        }
        else{
    
    debugger;
    var announcementID = ($routeParams.announcementID) ? parseInt($routeParams.announcementID) : 0;
    $rootScope.title = (announcementID > 0) ? 'Edit Announcement' : 'Add Announcement';
    $scope.buttonText = (announcementID > 0) ? 'Update Announcement' : 'Add New Announcement';
      
    
    var original = announcement.data;
    
      original._id = announcementID;
      //debugger;
      $scope.announcement = angular.copy(original);
      $scope.announcement._id = announcementID;

      $scope.isClean = function() {
        return angular.equals(original, $scope.announcement);
      };
      

      $scope.saveEvent = function(announcement) {
        $location.path('/manageAnnouncement');
        announcement.AdminIDAnnouncement = $rootScope.adminID;
        if (announcementID <= 0) {
            
            servicesData.insertAnnouncement(announcement);
        }
        else {
            
            servicesData.updateAnnouncement(announcementID, announcement);
        }
    };
    
    $scope.adminLogout = function(){
            $location.path('/adminLogin');
            sessionStorage.setItem("adminUserID", "");
            sessionStorage.setItem("adminUserName", "");
        };

        }   //end of else at session storage checking
});
      




recRestAdminApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'categoryList',
        templateUrl: 'templates/categoryList.html',
        controller: 'eventCategoryList',
        controllerAs: 'eveCatLis'
      })
      
      .when('/edit-category/:categoryID', {
        title: 'Edit Categories',
        templateUrl: 'templates/editCategory.html',
        controller: 'editCategory',
        resolve: {
          category: function(servicesData, $route){
            var categoryID = $route.current.params.categoryID;
            
            return servicesData.getCatListByID(categoryID);
          }
        }
      })
      
      
      .when('/manageEvents', {
        title: 'eventsList',
        templateUrl: 'templates/eventsList.html',
        controller: 'eventsList',
        controllerAs: 'eveLis'
        
      })
      .when('/edit-event/:eventID', {
        title: 'Edit Event',
        templateUrl: 'templates/editEvent.html',
        controller: 'editEvent',
        resolve: {
          event: function(servicesData, $route){
            var eventID = $route.current.params.eventID;
            
            return servicesData.getEventsListByID(eventID);
          }
        }
      })
       .when('/manageReservations',{
           title: 'manageReservations',
           templateUrl: 'templates/reservationsList.html',
           controller: 'reservationsList',
           controllerAs: 'resLis'
           
       })
       .when('/edit-reservation/:reservationID', {
        title: 'Edit Reservation',
        templateUrl: 'templates/editReservation.html',
        controller: 'editResv',
        resolve: {
          reservation: function(servicesData, $route){
            var reservationID = $route.current.params.reservationID;
            return servicesData.getResByID(reservationID);
            
          }
        }
      })
       .when('/manageAnnouncement',{
           title:'registerEventSelected',
           templateUrl: 'templates/AnnouncementList.html',
           controller: 'AnnouncementList',
           controllerAs: 'annouList'
       })
        .when('/edit-announcement/:announcementID', {
        title: 'Edit Announcement',
        templateUrl: 'templates/editAnnouncement.html',
        controller: 'editAnnouncement',
        resolve: {
          announcement: function(servicesData, $route){
            var announcementID = $route.current.params.announcementID;
            return servicesData.getAncmtByID(announcementID);
            
          }
        }
      })
       .when('/adminLogin', {
           title:'adminLogin',
           templateUrl: 'templates/adminLogin.html',
           controller: 'adminLoginCtrl',
           controllerAs: 'admLog'
       })
      .otherwise({
        redirectTo: '/'
      });
}]);

recRestAdminApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        //debugger;
        //$rootScope.adminID = current.$$route.adminID;
    });
}]);

