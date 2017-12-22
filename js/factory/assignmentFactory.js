var myApp  =  angular.module('app');
myApp.factory('mainInfo', function($http,$q) { 
    
    var factory = {}; 
  
    factory.readJson = function() {
        var deferred = $q.defer();
        $http.get('../data/random.json').success(function (data){
            console.log('read success');
            deferred.resolve(data);
        }).error(function(data){
            console.log("Error getting data from " + data);
          });
        return deferred.promise;
    }
    
    return factory;
});
