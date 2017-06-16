
let React = require('react');
let uuid = require('node-uuid');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({

  getInitialState : function() {
    return {
      showCompleted : false,
      searchText : '',
      todos : TodoAPI.getTodos()
    };
  },

  componentDidUpdate : function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleToggle : function(id){
    var newTodos = this.state.todos.map((todo) => {
      if ( todo.id == id )
        todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos : newTodos });
  },

  handleAddTodo : function(text){
    this.setState({
      todos : [
        ...this.state.todos,
        {
          id : uuid(),
          text : text,
          completed : false
        }
      ]
    });
  },

  handleSearch : function(showCompleted, searchText){
      this.setState({
        showCompleted : showCompleted,
        searchText : searchText.toLowerCase()
      });
  },

  render : function() {

    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <h1 className="text-center"> TodoApp </h1>
          </div>
        </div>

        <div>
          <div className="small-4 small-centered columns">
            <TodoSearch handleSearch={this.handleSearch}/>
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <TodoList todos={filteredTodos} handleToggle={this.handleToggle} />
          </div>
        </div>

        <div className="row">
          <div className="small-4 small-centered columns">
            <AddTodo handleAddTodo={this.handleAddTodo} />
          </div>
        </div>

      </div>
    );
  }

});

module.exports = TodoApp;
