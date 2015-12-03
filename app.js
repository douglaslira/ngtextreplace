(function() {
    'use strict';

    angular.module('App', []);

})();

(function() {
    'use strict';

    angular.module('App').directive('ngTextReplace', ngTextReplace);

    ngTextReplace.$inject = [];

    function ngTextReplace() {

        var tpl = [
            '<div>{{template}}</div>'
        ];

        return {
            scope: {
                ngModel: '=',
                tpl: '='
            },
            template: tpl.join(''),
            link: link
        }

        function link($scope, $element, $attrs) {

            $scope.$watchCollection('ngModel', function () {

                var tmp = $scope.tpl;
                angular.forEach($scope.ngModel, function (v, k) {
                    if ($scope.tpl.search('%' + k + '%') !== -1) {
                        tmp = tmp.split('%' + k + '%').join(v);
                    }
                });
                $scope.template = tmp;
            });

        }
    }
})();
