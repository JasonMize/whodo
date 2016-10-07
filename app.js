'use strict';

function MainController ($scope) {
    // const ctrl = this;
 
    $scope.savedTasks = [
            {
                info : "I'd like to make a new post.",
            },    
            {
                info : "I'd like the post to appear below this one.",
            },                
        ];


    // ctrl.showTaskSaved = false; // visibility for save verification message


    // save user input for new todo task
     $scope.addSavedTask = function() {
        $scope.savedTasks.push($scope.newTask);
        $scope.newTask = {};

        // ctrl.showTaskSaved = true; // visibility for save verification message

        // $timeout(function() {
        //     ctrl.showTaskSaved = false; // visibility for save verification message
        // }, 2000);
    }






}

angular.module('app', [])
    .controller('MainCtrl', MainController);

