/*! 2016-03-01 */
proA.directive("hello",function(){return{restrict:"E",transclude:!0,replace:!0,templateUrl:"tpl/hello.html",controller:function($scope){$scope.ability=[],this.addnode=function(){$scope.ability.push("node")}},link:function(scope,ele,attr){ele.bind("click",function(){console.log(scope.ability)})}}}),proA.directive("node",function(){return{require:"^hello",link:function(scope,ele,attr,parentCtrl){parentCtrl.addnode()}}});