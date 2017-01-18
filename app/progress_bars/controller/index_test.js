describe('progressBarController', function() {
    beforeEach(module('myApp'));

    var $controller;
    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('progressBarController', function() {
        it('it should give value of selected bar', function() {
            var $scope = {};
            var controller = $controller('progressBarController', {
                $scope: $scope
            });
            expect(controller).toBeDefined();
        });
    });
});