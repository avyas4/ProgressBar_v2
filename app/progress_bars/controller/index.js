'use strict';

// Declare app level module which depends on views, and services
angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller("progressBarController", ['$scope', 'getProgressBarData', function($scope, getProgressBarData) {
        /*
             This Function will call on change of dropdown 
             This will set selected value to  scope variable currentIndex
        */
        $scope.selectedBarValue = function(selectedValue) {
            $scope.currentIndex = selectedValue;
        }
        /*
            This Function will change the value of progress bar and type of it
       */
        $scope.changeBarValue = function(currentValue) {
            /* Initialize Variables */
            var type;
            var oldValue = $scope.records.bars[$scope.currentIndex];
            var orignalValue = oldValue + currentValue;
            /* Is drop down selected or not */
            if (typeof($scope.currentIndex) == "undefined") {
                $scope.isSelected = true;
            } else {
                $scope.isSelected = false;
            }
            /* Set value and type to progress bar */
            if (orignalValue >= 100) {
                type = 'danger';
                $scope.type = type;
                $scope.records.bars[$scope.currentIndex] = oldValue + currentValue;
            } else if (orignalValue < 0) {
                $scope.records.bars[$scope.currentIndex] = 0;
            } else {
                type = '';
                $scope.type = type;
                $scope.records.bars[$scope.currentIndex] = oldValue + currentValue;
            }
        };
        /*  getProgressBarData is an instance of a service 
            This function will get data from services  
         */
        getProgressBarData.getData(function(response) {

            $scope.records = response;

        }, function(error) {

            console.log(error);

        });

    }])
    /*  Create an instance of a service 
        Inject $http service 
        Fetch data from json files  
         */
    .service('getProgressBarData', ['$http', function($http) {
        this.getData = function(cb, errCb) {

            $http.get('/data-mocks.json').then(function(response) {

                cb(response.data);

            }, function(error) {

                errCb(error);

            })

        }
    }])