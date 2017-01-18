it('should demonstrate using when (200 status)', inject(function($http) {

    var $scope = {};

    /* Code Under Test */
    $http.get('/data-mocks.json')
        .success(function(data) {
            $scope.records = data;
        })
        .error(function(error) {
            console.log(error)
        });
    /* End */

    $httpBackend
        .when('GET', '/data-mocks.json')
        .respond(200, {
            "buttons": [
                10,
                38, -13, -18
            ],
            "bars": [
                62,
                45,
                64
            ],
            "limit": 230
        });

    $httpBackend.flush();

    expect($scope.records).toEqual({
        "buttons": [
            10,
            38, -13, -18
        ],
        "bars": [
            62,
            45,
            64
        ],
        "limit": 230
    });

}));