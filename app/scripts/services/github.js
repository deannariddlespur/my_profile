(function () {
'use strict';

angular.module('hecticApp')
  .factory('GithubService', function ($q, $http) {
   var getRepos = function () {
                var deferred = $q.defer();
                var url = "https://api.github.com/users/deannariddlespur/repos"
                $http.get(url)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    });
                return deferred.promise;
            };

            return {
                'getRepos': getRepos
            };
  });

})();
