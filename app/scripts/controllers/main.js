(function() {
'use strict';
    angular.module('hecticApp')
      .controller('MainCtrl', function ($scope,GithubService) {
        GithubService.getRepos()
        .then(function (repositories) {
                    $scope.repos = repositories;
                });

      });
})();
