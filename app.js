'use strict';

function MainController (orderByFilter, $timeout) {
    const ctrl = this;

    var savedTasks = [ ]; // dictionary object to hold task info
    ctrl.savedTasks = savedTasks; 
 
    ctrl.order = 'dateAdded'; // what field to order by at init
    ctrl.reverse = false;  // init with field order not reversed
    ctrl.completeStyle = 'not-complete';  // init with task given 'not-complete' style
    ctrl.showTaskSaved = false; // visibility for save verification message
    ctrl.rightNow = Date.now(); // grab the current date


    // order savedTasks by selected key
    ctrl.sortBy = function(order) {
        ctrl.reverse = (ctrl.order === order) ? !ctrl.reverse : false;
        ctrl.order = order;
        ctrl.savedTasks = orderByFilter(ctrl.savedTasks, ctrl.order, ctrl.reverse);
    };


    // mark a task complete/uncomplete
    ctrl.toggleCompleteTask = function (task) {
        task.complete = !task.complete;
    };


    // delete a task
    ctrl.deleteTask = function (index) {
        ctrl.savedTasks.splice(index, 1);
    };


    // edit existing task
    ctrl.editTask = function () {
        // console.log (task);
        // console.log (task.info)
        // console.log(ctrl.savedTasks[index].info)
        // console.log(ctrl.update.info)
        // ctrl.savedTasks[index].info = ctrl.task.info;
    };


    // save new tasks to savedTasks
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
















