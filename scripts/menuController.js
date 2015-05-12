/**
 * Created by Andrei on 5/13/2015.
 */
appHR.controller('MenuController', ['$scope', function ($scope) {
    $scope.employeeActionList = [
        {
            label: 'Show all employees',
            url: '#'
        },
        {
            label: 'Find one employee',
            url: '#'
        },
        {
            label: 'Insert new employee',
            url: '#'
        },
        {
            label: 'Update employee',
            url: '#'
        },
        {
            label: 'Delete employee',
            url: '#'
        }
    ];
}]);