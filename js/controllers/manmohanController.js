angular
.module('Aashi')
.controller('ManmohanController', ['$scope', '$rootScope','$timeout', ManmohanFunction ]);

function ManmohanFunction( $scope, $rootScope, $timeout ) {

  $scope.keyword="";
  $scope.hint="";
  $scope.loadStyle={'display': 'none'};
  console.log("style "+$scope.loadStyle);
  $scope.data = [{
    name: 'dlf one',
    id: 100,
  },{
    name: 'dlf two',
    id: 200,
  },{
    name: 'dlf three',
    id: 300,
  },{
    name: 'dlf four',
    id: 400,
  }];


  $scope.keyDownEvent = function( e ) {
          $timeout(function() {
            // console.log(e);
            // console.log(e.key);
            console.log(e.keyCode);
            //console.log("id"+$scope.id);
            //console.log(angular.element('#input').val());
            $scope.keyword = $scope.id;
            $scope.loadStyle={'display': 'block'};

            if($scope.keyword != "") {
              // console.log("data "+$scope.data[0].name);
              $scope.hint = $scope.data[0].name;
            }

            if($scope.keyword == "") {
              $scope.hint = "";
              $scope.loadStyle={'display': 'none'};
            }

            if(e.keyCode == 39) {
              $scope.id = $scope.hint;
            }
            
            console.log("scope keyword "+$scope.keyword);
            console.log("hint val" + $scope.hint);
          },0);
    }

    $scope.clickEvent = function(e) {
      console.log(e.srcElement.innerText);
      $scope.hint=e.srcElement.innerText;
      $scope.id=e.srcElement.innerText;
    }

}
