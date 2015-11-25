
app.config(function ($routeProvider) {
    $routeProvider

      .when('/', {
          templateUrl: 'PartialViews/main.html',
          controller: 'mainController'

      })

     .when('/leader', {
          templateUrl: 'PartialViews/leader.html',
          controller: 'leaderController'

     })

    .when('/coworker', {
        templateUrl: 'PartialViews/coworker.html',
        controller: 'coworkerController'
    })
});

