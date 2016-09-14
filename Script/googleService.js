angular.module("pieChartApp")
		.factory("googleService",
			["$q","$rootScope","$window",googleService]);

function googleService($q,$rootScope,$window){

				var deferred = $q.defer();

				//Load google chart api asyn
				$window.google.load("visualization","1",
					{
						packages:['corechart'],
						callback:function(){

							//once loaded call resolve inside the apply as this event happens outside angualr lifecycle
							$rootScope.$apply(function(){
								deferred.resolve();
							});

						}
					});

				return deferred.promise;
			}