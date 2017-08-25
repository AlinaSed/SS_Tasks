(function () {
    var app = angular.module('toDo', []),
        taskList = [
            {
                name: 'Task1',
                hours: 1,
                date: '02/01/2016'
            }, {
                name: 'Task2',
                hours: 2,
                date: '02/01/2016'
            }
        ];

    app.controller('ToDoController', function () {
        this.tasks = taskList;
        this.newTask = {};

        this.addNewTask = function () {
            this.tasks.push(this.newTask);
            this.newTask = {};
        };

        this.clearAll = function () {
            this.tasks.length = 0;
        };
    });
})();

