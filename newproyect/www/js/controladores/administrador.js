angular.module("starter.controller",[])
.controller("principalCtrl",function($scope, $state){

           $scope.nuevaPartida= function(){
           $state.go("nuevaPartida");
        }

        $scope.Creditos= function(){
          console.log("creditos");
        $state.go("Creditos");
     }

     $scope.ayuda= function(){
     console.log("ayuda");
     $state.go("ayuda");
  }

})

.controller("nuevaPartidaCtrl",function($scope){
     })

.controller("ayudaCtrl",function($scope ,$state){
       $scope.ok=function(){
         $state.go("principal");
              }
           })
.controller("CrediCtrl",function($scope, $state){
          $scope.ok=function(){
            $state.go("principal");
          }
      });
