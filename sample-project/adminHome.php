<?php

?>
<!DOCTYPE html>

<html ng-app="MyAdminApp">
    <head>
        <title>Event Management</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="lib/angular/angular.js" type="text/javascript"></script>
        <script src="lib/angular/angular-route.js" type="text/javascript"></script>
      
        <script src="js/jquery.min.js" type="text/javascript"></script>
        <link href="css/MyStyle.css" rel="stylesheet" type="text/css"/>
        <script src="js/bootstrap.js" type="text/javascript"></script>
        <script src="js/bootstrapValidator.js" type="text/javascript"></script>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        
        <script src="app/appAngularAdmin.js" type="text/javascript"></script>
        <script src="app/myAdminServices.js" type="text/javascript"></script>
        
    </head>
    <body>
       <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                       <a class="navbar-brand" href="#/">Manage Category</a> 
                    </li>
                    <li>
                        <a href="#/manageEvents">Manage Events</a>
                    </li>
                    <li>
                        <a href="#/manageReservations">Manage Reservations</a>
                    </li>
                    <li>
                        <a href="#/manageAnnouncement">Manage Announcements</a>
                    </li>
                </ul>
            </div>
            <!-- /navbar-collapse -->
        </div>
        <!-- /container -->
    </nav>
        
     <div class="container">
     
            <h1>Admin Module</h1>
             
                 
                     <div ng-view="" id="ng-view"></div>
                   
                     
		
        </div> 
        
    </body>
</html>