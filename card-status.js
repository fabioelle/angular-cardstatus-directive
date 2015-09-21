/*
 * angular-cardstatus-directive v0.0.0
 * (c) 2015 Fabio Lo Cascio
 * License: MIT
 */

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('cardstatus-directive', []).
  directive('cardstatus', function () {
    return {
      restrict: 'E',
      require: '^ngModel',
      scope: {
       ngModel: '='
      },      
      templateUrl: currentScriptPath.replace('card-status.js', 'card-status.html'),
      link: function (scope, element, attrs) {
              scope.ngModel.trend['average'] = scope.ngModel.trend['average']*100;
              scope.ngModel.trend['l_week'] = Math.round(scope.ngModel.trend['l_week'] * 100 * 10) / 10;
      }
    };
  });
