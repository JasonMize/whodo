'use strict';

function MainController (orderByFilter, $timeout) {
    const ctrl = this;

    var savedTasks = [ ];
 
    ctrl.order = 'date';
    ctrl.reverse = true;
    ctrl.savedTasks = savedTasks;
    ctrl.showTaskSaved = false; // visibility for save verification message
    ctrl.rightNow = Date.now();

    ctrl.sortBy = function(order) {
        ctrl.reverse = (ctrl.order === order) ? !ctrl.reverse : false;
        ctrl.order = order;
        ctrl.savedTasks = orderByFilter(ctrl.savedTasks, ctrl.order, ctrl.reverse);
    };

    // save user input for new todo task
     ctrl.addSavedTask = function() {
        // make current date the default 
        if (!ctrl.newTask.dateAdded) {
            ctrl.newTask.dateAdded = ctrl.rightNow;
        }
        if (!ctrl.newTask.date) {
            ctrl.newTask.date = ctrl.rightNow;
        }
        // save the user input
        ctrl.savedTasks.push(ctrl.newTask);
        ctrl.newTask = {};

        ctrl.showTaskSaved = true; // visibility for save verification message

        $timeout(function() {
            ctrl.showTaskSaved = false; // visibility for save verification message
        }, 1500);
    };



}

angular.module('app', [])
    .controller('MainCtrl', MainController);
















