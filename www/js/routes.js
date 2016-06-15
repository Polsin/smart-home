angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.smartHome', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/smartHome.html',
        controller: 'smartHomeCtrl'
      }
    }
  })

  .state('menu.controlPanel', {
    url: '/control',
    views: {
      'side-menu21': {
        templateUrl: 'templates/controlPanel.html',
        controller: 'controlPanelCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.statistics', {
    url: '/statistics',
    views: {
      'side-menu21': {
        templateUrl: 'templates/statistics.html',
        controller: 'statisticsCtrl'
      }
    }

  })

  .state('menu.userGuide', {
    url: '/guide',
    views: {
      'side-menu21': {
        templateUrl: 'templates/userGuide.html',
        controller: 'userGuideCtrl'
      }
    }

  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu/home')



});
