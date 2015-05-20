angular.module('app.controllers', [])

	.controller('homeCtrl', function($scope, $rootScope, $location, $stateParams) {
    $scope.posts = posts;
    $scope.post = 0;
  })

  .controller('paginator', function($scope, $rootScope, $location, $stateParams){
    $scope.pageMin = 1;
    $scope.pageMax = 1;
    if($stateParams.p) {
      $scope.current = $stateParams.p;
    } else {
      $scope.current =1;
    }

    $scope.paginate = function(index) {
      if (index <= $scope.pagination)
        return true;
    }

    $scope.pageIndex = function(num) {
      var pages = []; 

      for (var i = 1; i <= num; i++) { 
          pages.push(i) 
      } 

      return pages;
    }

    $scope.pageTo = function(page) {
      $scope.current = page;
      $location.search('p', page);
    }

    $scope.show = function(page) {
      if($scope.current == page)
        return true;
    }

    $scope.nextPage = function() {
      if($scope.current < $scope.pageMax)
        $scope.current ++;
    }

    $scope.prevPage = function() {
      if($scope.current > 1)
        $scope.current --;
    }
  })

  .controller('disqusCtrl', function(){
  	/* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = '50wordsaday';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  })
;
