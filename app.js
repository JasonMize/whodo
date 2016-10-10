'use strict';

function MainController (orderByFilter, $timeout) {
    const ctrl = this;

    var savedTasks = [ ];
 
    ctrl.order = 'dateAdded';
    ctrl.reverse = false;
    ctrl.completeStyle = 'not-complete';
    ctrl.savedTasks = savedTasks;
    ctrl.showTaskSaved = false; // visibility for save verification message
    ctrl.rightNow = Date.now();


    ctrl.sortBy = function(order) {
        ctrl.reverse = (ctrl.order === order) ? !ctrl.reverse : false;
        ctrl.order = order;
        ctrl.savedTasks = orderByFilter(ctrl.savedTasks, ctrl.order, ctrl.reverse);
    };


    ctrl.toggleCompleteTask = function (task) {
        task.complete = !task.complete;
    };


    ctrl.deleteTask = function (index) {
        ctrl.savedTasks.splice(index, 1);
    };


    // ctrl.editTask = function (index, key) {
    //     ctrl.savedTasks[index] = "";
    // };


     ctrl.addSavedTask = function() {
        // set new tasks to uncomplete
        ctrl.newTask.complete = false;

        // make current date the default 
        if (!ctrl.newTask.dateAdded) {
            ctrl.newTask.dateAdded = ctrl.rightNow;
        }
        if (!ctrl.newTask.dateDue) {
            ctrl.newTask.dateDue = ctrl.rightNow;
        }
        // save the user input
        ctrl.savedTasks.push(ctrl.newTask);
        ctrl.newTask = {};

        // visibility for save verification message
        ctrl.showTaskSaved = true; 
        $timeout(function() {
            ctrl.showTaskSaved = false; 
        }, 1500);
    };


}

angular.module('app', [])
    .controller('MainCtrl', MainController);
















