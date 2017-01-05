recRestApp.factory("servicesData", ['$http', function($http){
       
    var serviceBase = 'services/'
    var obj = {};
    obj.getEventcategories = function(){
        return $http.get(serviceBase + 'eventcategories');
    };
    obj.getEventsList = function(categoryName){
        return $http.get(serviceBase + 'eventsList?nameCat=' + categoryName);
    };
    obj.getEventByID = function(eventID){
        return $http.get(serviceBase + 'eventsDetails?eventIDSelected='+eventID);
    };
     obj.makeReservation = function (candidate) {
         
         //console.log(candidate);
         //debugger;
         return $http.get(serviceBase + 'registerCandidate?CandidateName='+candidate.CandidateName +'&Age=' +candidate.Age+'&BillingAddress='+ candidate.BillingAddress+'&CardNumber='+candidate.CardNumber+'&ConfirmationStatus='+candidate.ConfirmationStatus + '&Email='+candidate.Email+ '&EventIDReservationData='+candidate.EventIDReservationData+ '&Gender='+candidate.Gender+ '&GuardianName='+candidate.GuardianName+ '&GuardianRelation='+candidate.GuardianRelation+ '&ReservationID='+candidate.ReservationID+ '&cvv='+candidate.cvv+ '&expiryMonth='+candidate.expiryMonth+ '&expiryYear='+candidate.expiryYear);
         //return $http.get(serviceBase + 'registerCandidate?CandidateName='+candidate.CandidateName);
     };
    
    obj.getReservation = function(reservationID){
       
        return $http.get(serviceBase + 'getResDataByID?resIDSelected=' + reservationID);
    };
    
    obj.getAnnoucementPublic = function(){
        return $http.get(serviceBase + 'AnnoucementListPublic');
        }; 
    
    return obj;
}]);