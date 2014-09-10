'use strict';

mediaApp.controller('MainCtrl', function($scope, $ionicSideMenuDelegate,SettingsService) {
    SettingsService.set('maxResults',"50");

    // Menu button
    $scope.leftButtons = [{
        type: 'button-icon button-clear ion-navicon',
        tap: function(e) {
            $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
        }
    }];

    ionic.Platform.ready(function(){
        console.log("Cordova is ready");
        // Add device specific stuff here
    });

    $scope.singers = ['img/shakira.jpg','img/justin.jpg','img/selena.jpg','img/adam.jpg'];
    var moreImgs = ['img/ariana.jpg', 'img/ed.jpg', 'img/harry.jpg',
        'img/alicia.jpg', 'img/jennifer.jpg','img/blake.jpg', 'img/pink.jpg','img/bruno.jpg','img/christina.jpg','img/jason.jpg',
        'img/pitbull.jpg','img/katy.jpg','img/iggy.jpg'];

    $scope.add = function add(name) {
        if (moreImgs.length>0)
            $scope.singers.push(moreImgs.pop());
        else {
            moreImgs.push($scope.singers.splice(0,1)[0]);
        }
    }

    $scope.remove = function remove() {
        var num = ~~(Math.random() * $scope.singers.length);
        moreImgs.push($scope.singers[num]);
        $scope.singers.splice(num,1)[0];
    };

    if ($scope.sideMenuController !=null)
        $scope.sideMenuController.toggleLeft();

})

mediaApp.controller('HomeCtrl', function ($scope) {
	console.log('[com.adobe.am.pg.base][controllers.js]: HomeCtrl');
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('BeaconCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: BeaconCtrl');
    $scope.navTitle = "Beacons";
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
	$scope.searchBeacons = function() {
		$scope.infoTxt = "Searching...";
		
		var theServerToPostTo = "";
		var theAuthToken = "";
		
		// var uuidsToMonitor;

		// AttendeaseBeacons.notifyServer(theServerToPostTo, 900); // 900 seconds

		// AttendeaseBeacons.notifyServerAuthToken(theAuthToken);

		// uuidsToMonitor = ["E2C56DB5-DFFB-48D2-B060-D0F5A71096E0", "B9407F30-F5F8-466E-AFF9-25556B57FE6D"];

		// AttendeaseBeacons.monitor(uuidsToMonitor, function() {
			// return setInterval((function() {
				// return AttendeaseBeacons.getBeacons(function(beacons) {
					// if (_.isEmpty(beacons)) {
						// $scope.infoTxt = "No beacons found.";
						// return console.log("No beacons found.");
					// } else {
						// return _.each(beacons, function(beacon) {
							// $scope.infoTxt = "F";
							// return console.log("" + beacon.uuid + " (" + beacon.major + ", " + beacon.minor + ") " + beacon.proximityString + " (" + beacon.accuracy + " meters)");
						// });
					// }
				// });
			// }), 3000);
		// });
		
    }
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('CameraCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: CameraCtrl');
    $scope.navTitle = "Camera";
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('AccelerometerCtrl', function ($scope,$window) {
    console.log('[com.adobe.am.pg.base][controllers.js]: AccelerometerCtrl');
    $scope.navTitle = "Accelerometer";

    $scope.leftButtons = [{
        type: 'button-icon button-clear ion-ios7-arrow-back',
        tap: function(e) {
            $window.history.back();
        }
    }];

    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('CalendarCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: CalendarCtrl');
    $scope.navTitle = "Calendar";
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
	$scope.calendarEntry = function() {
		$scope.infoTxt = "Creating...";
		
		var startDate = new Date("July 19, 2013 8:00:00");
		var endDate = new Date("July 19, 2013 4:00:00");
		var title = "PhoneGap Day";
		var location = "Portland";
		var notes = "Arrive on time, don't want to miss out!";
		var success = function() { alert("Success"); };
		var error = function(message) { alert("Oopsie! " + message); };
		calendarPlugin.createEvent(title, location, notes, startDate, endDate, success, error);
    }
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('GeolocationCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: GeolocationCtrl');
    $scope.navTitle = "Geolocation";
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('CompassCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: CompassCtrl');
    $scope.navTitle = "Compass";
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})

mediaApp.controller('FiltersearchCtrl', function ($scope,$window) {
	console.log('[com.adobe.am.pg.base][controllers.js]: FiltersearchCtrl');
    $scope.navTitle = "Filtered search";
	
	$scope.onKeyPress = function($event) {
		console.log($event.charCode);
		console.log($event.altKey);
	}
	
	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
})



mediaApp.controller('AboutCtrl', function ($scope) {
    $scope.navTitle = "About Media Explorer";
    if ($scope.sideMenuController.isOpen())
        $scope.sideMenuController.toggleLeft();
		
    $scope.rightButtons =  [{
        type: 'button-icon button-clear ion-email',
        tap: function(e) {
            if (window.plugins && window.plugins.emailComposer ) {
                window.plugins.emailComposer.showEmailComposerWithCallback(console.log("Email callback " + e), "Want to know more ...", "Please send me more details.", "malkin@adobe.com", null, null, false, null, null);
            }
            else {
                location.href = 'mailto:?subject=Question about PhoneGap&body=';
            }
        }
    }];
    $scope.linkTo = function(link){
        console.log("Link to " + link);
        var ref = window.open(link, '_blank', 'location=yes');
    }
})

mediaApp.controller('SettingsCtrl', function ($scope,SettingsService,$window) {
	$scope.navTitle = "Settings";
	$scope.volume = "20";
	$scope.audio = "on";
	$scope.video = "on";
	$scope.maxResults = SettingsService.get('maxResults');

	$scope.leftButtons = [{
		type: 'button-icon button-clear ion-ios7-arrow-back',
		tap: function(e) {
			$window.history.back();
		}
	}];
	if ($scope.sideMenuController.isOpen())
		$scope.sideMenuController.toggleLeft();

	$scope.toggleList = [
		{ text: "Audio Mode", checked: true },
		{ text: "Video Mode", checked: true }
	];

	$scope.changeNumResults = function() {
		console.log("Results set to " + this.maxResults)
		$scope.maxResults = this.maxResults;
		SettingsService.set('maxResults',this.maxResults);
	};
})

mediaApp.controller('SearchCtrl', function ($scope,MediaService,$ionicModal,$location,$ionicSideMenuDelegate,SettingsService) {
	$scope.navTitle = "iTunes Media Search";

	$scope.rightButtons =  [{
		type: 'button-icon button-clear ion-more',
		tap: function(e) {
			$scope.openSortModal();
		}
	}];
	$scope.request = {};
	$scope.showFlag = false;
	$scope.mediaTypes = {};
	$scope.mediaTypes.type = 'all';
	$scope.sortBy = "artistName";
	$scope.filterTerm = "";

	if ($scope.sideMenuController.isOpen())
		$scope.sideMenuController.toggleLeft();

	var doSearch = ionic.debounce(function(query) {
		var type = $scope.mediaTypes.type;
		if (type=="all")  type="";
		if (query!=null) {
			// Pass in the query string, the media type and the # of results to return (from SettingsService)
			MediaService.search(query,type,SettingsService.get('maxResults')).then(function(resp) {
				$scope.mediaResults = resp;
				console.log("Result Count " + $scope.mediaResults.resultCount);
				$scope.mediaResults = resp;

				if ($scope.mediaResults.resultCount == 0)
					$scope.infoTxt = 'No matching results found';

			});
		}
	}, 500);

	$scope.search = function() {
		$scope.infoTxt = null;
		doSearch($scope.request.query);
	}

	$scope.checkMedia = function(item) {
		console.log("URL " + item.previewUrl + " " + item.kind);
		if (item.kind==='song' || item.kind==='music-video') {
			$scope.openPlayModal(item);
			$scope.infoTxt = null;
		}
		else $scope.infoTxt = 'No suitable player available for the selected media type.'

	};

	$ionicModal.fromTemplateUrl('views/playModal.html', function(modal) {
		$scope.playModal = modal;
	}, {
		scope: $scope,
		animation: 'slide-in-up'
	});

	$scope.openPlayModal = function(item) {
		$scope.url = item.previewUrl;
		if  (item.trackName != null) $scope.title = item.trackName
		else $scope.title = item.collectionName;

		$scope.kind = item.kind;
		$scope.artist = item.artistName;
		$scope.playModal.show();
	}

	$scope.closePlayModal = function() {
		$scope.playModal.hide();
	}

	$ionicModal.fromTemplateUrl('views/sortModal.html', function(sortModal) {
		$scope.sortModal = sortModal;
	}, {
		scope: $scope,
		animation: 'slide-in-up'
	});

	$scope.openSortModal = function() {
		$scope.sortModal.show();
	}

	$scope.closeSortModal = function() {
		$scope.sortModal.hide();
	}

	$scope.saveSort = function() {
		console.log("This filter " + this.filterTerm + " query " + $scope.request.query + " sort " + this.sortBy);
		$scope.filterTerm = this.filterTerm;
		$scope.sortBy = this.sortBy;
		$scope.sortModal.hide();
	}
})




