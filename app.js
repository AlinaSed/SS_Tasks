(function () {
    var taskList = [
            {
                name: 'Task1',
                hours: 1,
                date: '02/01/2016'
            }, {
                name: 'Task2',
                hours: 22,
                date: '02/01/2016'
            }
        ];

    angular
        .module('toDo', []);

    angular
        .module('toDo')
        .controller('ToDoController', ToDoController);

    function ToDoController () {
        this.tasks = taskList;
        this.newTask = {};

        this.addNewTask = function () {
            this.tasks.push(this.newTask);
            this.newTask = {};
        };

        this.clearAll = function () {
            this.tasks.length = 0;
        };
    };
})();

