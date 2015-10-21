function TreeviewController($scope) {
    TreeviewScan($scope.treeData["nodes"], 0);
    //$scope.clickable = true;
    $scope.clicked = false;

    //revise
    $scope.hasIcons = function (data) {
        if (data.hasOwnProperty('icons')) {
            if (data.icons.hasOwnProperty[1]) $scope.curIconSrc = data.icons[1]; //collapse
            else $scope.curIconSrc = data.icons[0]; //expand / any other type
            return true;
        }
        return false;
    };

    /*
    //revise
    $scope.expanded = function (data) {
        if ($scope.$parent.tree.showing) return true;
        return false;
    }; */
} //end TreeviewController

function TreeviewScan(obj, total){
  var key = "nodes";
  var t_obj;

  if(obj instanceof Object){
    for(t_obj in obj){
      if(obj.hasOwnProperty(key)){
        console.log("Scanning object " + t_obj);
        TreeviewScan(obj[t_obj], total++);
      }
    }
  }

  console.log("Total Levels: " + total);
}

function Treeview() {
  //HTML for tree
  /*
  var template =
      '<div class="treeviewWrapper">' +
      '{{treeData}}'+
      '<ul class="treeList">' +
      '<li ng-repeat="node in treeData" >' +
      '<div class="dataItem" ng-click="clicked=!clicked">' +
      //'<img ng-class="{\'expanded\': clicked, \'collapsed\': !clicked}">' +
      //' ng-if="hasIcons(data)" ng-src="curIconSrc"/> ' +
      //'{{node.value}}' +
      '<br>';
  if(node.nodes.length > 0)
      template += '<bossy-treeview tree-data="node.nodes" options=""></bossy-treeview>';
  template = template + 'li</div></li>ul</ul>';
  template += '</div> <!-- / treeviewWrapper -->';
  var elem = angular.element(template);
  var compiled = $compile(elem);

    console.log('executed');
    */

    return {
        restrict: 'AE',
        scope: {
            options: '=',
            treeData: '='
        },
        //template: template,
        controller: TreeviewController
    };
} //end Treeview

Treeview.$inject = [];
TreeviewController.$inject = ['$scope'];

angular.module('bossy.treeview')
    .controller('bossyTreeviewController', TreeviewController)
    .directive('bossyTreeview', Treeview);
