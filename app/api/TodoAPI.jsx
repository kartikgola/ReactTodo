let $ = require('jquery');

module.exports = {

    setTodos : function(todos) {
        if ( $.isArray(todos) ) 
            localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    },

    getTodos : function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        } finally {
            if ( $.isArray(todos) ) 
                return todos;
            return [];
        }
    },

    filterTodos : function(todos, showCompleted, searchText) {

        let filteredTodos = todos;

        // Filter by completed and showCompleted
        // Show all Todos if showCompleted is checked
        // Otherwise, show only completed Todos
        filteredTodos = filteredTodos.filter((todo) => {
            if ( showCompleted || todo.completed == false )
                return todo;
        });

        // Filter by searchText
        if ( searchText.length > 0 )
            filteredTodos = filteredTodos.filter((todo) => {
                if ( todo.text.toLowerCase().indexOf(searchText.trim()) >= 0 )
                    return todo;
            });

        // Sort Todos according to completed status
        // Not completed todos come before completed ones
        filteredTodos.sort((a, b) => {
            if ( !a.completed && b.completed )
                return -1; // a comes before b
            else if ( a.completed && !b.completed )
                return 1; // a comes after b
            else 
                return 0;
        });

        return filteredTodos;
    }
}