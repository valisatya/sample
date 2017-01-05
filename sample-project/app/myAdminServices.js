
recRestAdminApp.factory("servicesData", ['$http', function($http){
       
    var serviceBase = 'services/'
    var obj = {};
    obj.getEventcategories = function(){
        return $http.get(serviceBase + 'eventcategories');
    };
    obj.getCatListByID = function(catID){
        return $http.get(serviceBase + 'catListByID?catID=' + catID);
    };
    
    obj.getAdminByCredentials = function(admin){
        //debugger;
        return $http.post(serviceBase + 'getAdminByDetails', {admID: admin.AdminID, admPwd: admin.AdminPassword}).then(function (results) {
       //debugger;
        console.log(results);
        return results;
       
    });
    }
    
     obj.insertCategory = function (category) {
         
    return $http.post(serviceBase + 'insertCategory', category).then(function (results) {
       //debugger;
        console.log(results);
        return results;
       
    });
    };
        
    obj.updateCategory = function (categoryID,category) {
            //debugger;
	    return $http.post(serviceBase + 'updateCategory', {catID:categoryID, catName:category.CategoryName, catDescription:category.CategoryDescription}).then(function (status) {
                //debugger;
                console.log(status);
	        return status.data;
	    });
	}; 
    obj.getEventsListAll = function(){
        return $http.get(serviceBase + 'eventsListAll');
    };
    
    obj.getEventsListByID = function(eventID){
        return $http.get(serviceBase + 'catEventByID?eventIDSelected=' + eventID);
    };
    
    obj.insertEvent = function (event) {
    return $http.post(serviceBase + 'insertEvent', event).then(function (results) {
       //debugger;
        console.log(results);
        return results;
       
    });
    };
    
    obj.updateEvent = function (eventID, event) {
            //debugger;
	    return $http.post(serviceBase + 'updateEvent', {eveID:eventID, catName:event.CategoryNameEventData, eveDescription:event.EventDescription, CoaName:event.CoachName, CosPerson:event.CostPerPerson, DayWeek:event.DaysInWeek, Dur:event.Duration, EveName:event.EventName, LvlCrse:event.LevelOfCourse, NoAvail:event.NoOfAvailable, ShwStatus:event.ShowStaus, StrDate:event.StartDate, TimeEvent:event.TimeOfEvent }).then(function (status) {
                //debugger;
                console.log(status);
	        return status.data;
	    });
	}; 
         
    obj.getReservationListAll = function(){
        return $http.get(serviceBase + 'reservationListAll');
    }; 
        
    obj.getResByID = function(reservationID){
       
        return $http.get(serviceBase + 'getResDataByID?resIDSelected=' + reservationID);
    };
    
    
     obj.updateReservation = function (reservationID, reservation) {
            //debugger;
	    return $http.post(serviceBase + 'updateReservation', {resID:reservationID, admnID:reservation.AdminIDReservationData, ageofC:reservation.Age, billAddr:reservation.BillingAddress, canName:reservation.CandidateName, confStatus:reservation.ConfirmationStatus, emailC:reservation.Email, EveID:reservation.EventIDReservationData, GenCan:reservation.Gender, GrdnName:reservation.GuardianName, GrdnRltn:reservation.GuardianRelation, Rmks:reservation.Remarks, cardNum:reservation.CardNumber, expMon:reservation.expiryMonth, empYear:reservation.expiryYear, cvvCard:reservation.cvv }).then(function (status) {
                //debugger;
                console.log(status);
	        return status.data;
	    });
	}; 
      obj.updateReservationIncreaseCount = function (reservationID, reservation) {
            debugger;
	    return $http.post(serviceBase + 'updateReservationIncCount', {resID:reservationID, evntID:reservation.EventIDReservationData, admnID:reservation.AdminIDReservationData, ageofC:reservation.Age, billAddr:reservation.BillingAddress, canName:reservation.CandidateName, confStatus:reservation.ConfirmationStatus, emailC:reservation.Email, EveID:reservation.EventIDReservationData, GenCan:reservation.Gender, GrdnName:reservation.GuardianName, GrdnRltn:reservation.GuardianRelation, Rmks:reservation.Remarks, cardNum:reservation.CardNumber, expMon:reservation.expiryMonth, empYear:reservation.expiryYear, cvvCard:reservation.cvv }).then(function (status) {
                //debugger;
                console.log(status);
	        return status.data;
	    });
	};
        obj.updateReservationReduceCount = function (reservationID, reservation) {
            debugger;
	    return $http.post(serviceBase + 'updateReservationReduCount', {resID:reservationID, evntID:reservation.EventIDReservationData, admnID:reservation.AdminIDReservationData, ageofC:reservation.Age, billAddr:reservation.BillingAddress, canName:reservation.CandidateName, confStatus:reservation.ConfirmationStatus, emailC:reservation.Email, EveID:reservation.EventIDReservationData, GenCan:reservation.Gender, GrdnName:reservation.GuardianName, GrdnRltn:reservation.GuardianRelation, Rmks:reservation.Remarks, cardNum:reservation.CardNumber, expMon:reservation.expiryMonth, empYear:reservation.expiryYear, cvvCard:reservation.cvv }).then(function (status) {
                //debugger;
                console.log(status);
	        return status.data;
	    });
	};
        
        obj.getAnnouncementAll = function(){
        return $http.get(serviceBase + 'announcementListAll');
        }; 
        
        obj.getAncmtByID = function(announcementID){
       
        return $http.get(serviceBase + 'getAncmtDataByID?ancmtIDSelected=' + announcementID);
       };
       
       obj.insertAnnouncement = function (announcement) {
         
        return $http.post(serviceBase + 'insertAnnouncement', {admnID:announcement.AdminIDAnnouncement, headngCnt:announcement.Heading, bodyCnt:announcement.BodyContent, loctn:announcement.Location, pblsh:announcement.Publish}).then(function (results) {
       //debugger;
        console.log(results);
        return results;
       
        });
        };
        
        obj.updateAnnouncement = function (announcementID, announcement) {
         
        return $http.post(serviceBase + 'updateAnnouncement', {aancID:announcementID ,admnID:announcement.AdminIDAnnouncement, headngCnt:announcement.Heading, bodyCnt:announcement.BodyContent, loctn:announcement.Location, pblsh:announcement.Publish}).then(function (results) {
       //debugger;
        console.log(results);
        return results;
       
        });
        };
       
    return obj;
}]);
